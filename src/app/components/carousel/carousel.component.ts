import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  currentSlide = 0;
  intervalId: any;

  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private readonly swipeThreshold: number = 50;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.clearAutoSlide();
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  clearAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  resetTimer(): void {
    this.startAutoSlide();
  }

  previousSlide(): void {
    this.currentSlide =
      this.currentSlide === 0 ? this.projects.length - 1 : this.currentSlide - 1;
    this.resetTimer();
    this.updateSlidePosition();
  }

  nextSlide(): void {
    this.currentSlide =
      this.currentSlide === this.projects.length - 1 ? 0 : this.currentSlide + 1;
    this.resetTimer();
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
