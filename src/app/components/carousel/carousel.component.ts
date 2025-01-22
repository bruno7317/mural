import { Component, OnInit, OnDestroy } from '@angular/core';
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
      // this.nextSlide();
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
  }

  nextSlide(): void {
    this.currentSlide =
      this.currentSlide === this.projects.length - 1 ? 0 : this.currentSlide + 1;
    this.resetTimer();
  }

  navigateToProject(projectId: string): void {
    this.router.navigate([`/projects/${projectId}`]);
  }
}
