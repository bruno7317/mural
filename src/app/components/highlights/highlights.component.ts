import { ProjectService, Project, Tag } from '../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  highlightedProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.highlightedProjects = this.projectService.getProjectsByTag(Tag.Highlight);
  }
}
