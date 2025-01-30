import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  projects: Project[] = [];
  currentSlide = 0;

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private readonly swipeThreshold: number = 50;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  previousSlide(): void {
    this.currentSlide =
      this.currentSlide === 0 ? this.projects.length - 1 : this.currentSlide - 1;
    this.updateSlidePosition();
  }

  nextSlide(): void {
    this.currentSlide =
      this.currentSlide === this.projects.length - 1 ? 0 : this.currentSlide + 1;
    this.updateSlidePosition();
  }

  navigateToProject(projectId: string): void {
    if (!projectId || projectId.trim() === '') {
      return;
    }

    this.router.navigateByUrl(`/projects/${projectId}`);

    setTimeout(() => {
      const element = document.getElementById(`project-${projectId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (swipeDistance > this.swipeThreshold) {
      this.previousSlide();
    } else if (swipeDistance < -this.swipeThreshold) {
      this.nextSlide();
    }
  }

  private updateSlidePosition(): void {
    const slidesContainer = document.querySelector('.slides-container') as HTMLElement;
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }
}
