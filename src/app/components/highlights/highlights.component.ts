import { ProjectService, Project, Tag } from '../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  highlightedProjects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.highlightedProjects = this.projectService.getProjectsByTag(Tag.Highlight);
  }

  navigateToProject(projectId: string): void {
    console.log('projectId', projectId);
    this.router.navigate([`/projects/${projectId}`]);
  }
}
