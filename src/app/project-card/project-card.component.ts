import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() projectId!: string;

  constructor(private router: Router) { }

  navigateToProject(): void {
    this.router.navigate([`/projects/${this.projectId}`]);
  }
}
