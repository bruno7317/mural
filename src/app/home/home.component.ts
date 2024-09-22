import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects = [
    {
      id: 'project-1',
      title: 'E-commerce Website',
      imageUrl: 'assets/images/ecommerce.webp',
      description: 'A fully functional e-commerce website with a product catalog, shopping cart, and payment integration.'
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      imageUrl: 'assets/images/task-app.webp',
      description: 'A web application for tracking personal and team tasks, with features like deadlines, priorities, and team collaboration.'
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      imageUrl: 'assets/images/weather.webp',
      description: 'A real-time weather dashboard displaying local forecasts and weather trends using a public API.'
    },
    {
      id: 'project-4',
      title: 'Portfolio Website',
      imageUrl: 'assets/images/portfolio.webp',
      description: 'A personal portfolio website showcasing projects, blog posts, and social media links.'
    },
    {
      id: 'project-5',
      title: 'Restaurant Reservation System',
      imageUrl: 'assets/images/restaurant.webp',
      description: 'A restaurant reservation system that allows users to book tables online and manage reservations for restaurant owners.'
    },
    {
      id: 'project-6',
      title: 'Real-time Chat Application',
      imageUrl: 'assets/images/chat-app.webp',
      description: 'A real-time chat application with user authentication, message persistence, and group chat functionality.'
    },
    {
      id: 'project-7',
      title: 'Fitness Tracking App',
      imageUrl: 'assets/images/fitness.webp',
      description: 'A fitness app that tracks workouts, monitors progress, and sets goals, integrated with mobile devices.'
    },
    {
      id: 'project-8',
      title: 'Online Learning Platform',
      imageUrl: 'assets/images/learning-platform.webp',
      description: 'An online learning platform with video lessons, quizzes, and a certification system for completed courses.'
    },
    {
      id: 'project-9',
      title: 'Expense Tracker',
      imageUrl: 'assets/images/expense-tracker.webp',
      description: 'A personal expense tracking tool with reporting features to monitor spending habits and set savings goals.'
    },
    {
      id: 'project-10',
      title: 'Stock Market Tracker',
      imageUrl: 'assets/images/stock-tracker.webp',
      description: 'A stock market tracker that monitors live stock prices, provides portfolio management, and tracks financial news.'
    }
  ];
}
