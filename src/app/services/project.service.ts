import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'assets/images/chat-app.webp',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Cconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'assets/images/ecommerce.webp',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'assets/images/expense-tracker.webp',
      link: 'https://example.com/project3',
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }
}
