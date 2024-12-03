import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  projects: Project[] = [];
  currentSlide = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  previousSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.projects.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.projects.length - 1 ? 0 : this.currentSlide + 1;
  }
}
