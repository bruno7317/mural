import { Injectable } from '@angular/core';

export enum Tag {
  Highlight = 'highlight',
  Angular = 'angular',
  NodeJS = 'nodejs',
  MongoDB = 'mongodb',
  WebSockets = 'websockets',
  StripeAPI = 'stripe-api',
  PayPalAPI = 'paypal-api',
  D3 = 'd3',
  OpenWeatherAPI = 'openweather-api',
  Bootstrap = 'bootstrap',
  JWT = 'jwt',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  challenges: string;
  solutions: string;
  tags?: Tag[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-commerce Website',
      imageUrl: 'assets/images/ecommerce.webp',
      description:
        'A fully functional e-commerce website with a product catalog, shopping cart, and payment integration.',
      challenges:
        'Ensuring smooth payment integration across multiple payment gateways, and maintaining performance with large product catalogs.',
      solutions:
        'Implemented Stripe and PayPal for payment processing, used lazy loading for product images, and optimized database queries for faster load times.',
      tags: [Tag.Angular, Tag.NodeJS, Tag.MongoDB, Tag.StripeAPI, Tag.PayPalAPI],
    },
    {
      id: 'project-2',
      title: 'Task Management App',
      imageUrl: 'assets/images/task-app.webp',
      description:
        'A web application for tracking personal and team tasks, with features like deadlines, priorities, and team collaboration.',
      challenges:
        'Ensuring real-time updates across multiple users and devices, while maintaining data consistency.',
      solutions:
        'Integrated WebSockets for real-time task updates and used Redux for state management, ensuring consistent task status across all devices.',
      tags: [Tag.Angular, Tag.NodeJS, Tag.WebSockets],
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      imageUrl: 'assets/images/weather.webp',
      description:
        'A real-time weather dashboard displaying local forecasts and weather trends using a public API.',
      challenges:
        'Efficiently fetching and displaying real-time weather data without exceeding API rate limits.',
      solutions:
        'Used caching mechanisms to store frequently fetched data, and implemented polling intervals to reduce the frequency of API requests.',
      tags: [Tag.Angular, Tag.OpenWeatherAPI, Tag.Bootstrap, Tag.Highlight],
    },
    {
      id: 'project-4',
      title: 'Portfolio Website',
      imageUrl: 'assets/images/portfolio.webp',
      description:
        'A personal portfolio website showcasing projects, blog posts, and social media links.',
      challenges:
        'Designing a responsive and clean UI that reflects personal branding, while ensuring fast load times.',
      solutions:
        'Used a mobile-first design approach, implemented lazy loading for images, and optimized CSS and JavaScript files for better performance.',
      tags: [Tag.Angular, Tag.Highlight],
    },
    {
      id: 'project-5',
      title: 'Restaurant Reservation System',
      imageUrl: 'assets/images/restaurant.webp',
      description:
        'A restaurant reservation system that allows users to book tables online and manage reservations for restaurant owners.',
      challenges:
        'Managing high volumes of reservations during peak hours and preventing double bookings.',
      solutions:
        'Implemented a reservation queue system and added conflict checks for simultaneous bookings, ensuring no overlaps.',
      tags: [Tag.Angular, Tag.NodeJS, Tag.MongoDB, Tag.Highlight],
    },
    {
      id: 'project-6',
      title: 'Real-time Chat Application',
      imageUrl: 'assets/images/chat-app.webp',
      description:
        'A real-time chat application with user authentication, message persistence, and group chat functionality.',
      challenges:
        'Maintaining real-time message synchronization between users and storing chat histories efficiently.',
      solutions:
        'Used WebSockets for real-time communication and MongoDB for persistent message storage, with user authentication through JWT.',
      tags: [Tag.Angular, Tag.NodeJS, Tag.WebSockets, Tag.JWT],
    },
    {
      id: 'project-7',
      title: 'Fitness Tracking App',
      imageUrl: 'assets/images/fitness.webp',
      description:
        'A fitness app that tracks workouts, monitors progress, and sets goals, integrated with mobile devices.',
      challenges:
        'Ensuring accurate tracking of fitness data from multiple devices and providing users with real-time feedback.',
      solutions:
        'Integrated with Apple HealthKit and Google Fit APIs for real-time data sync, and used charts for visualizing user progress.',
      tags: [Tag.Angular, Tag.D3],
    },
    {
      id: 'project-8',
      title: 'Online Learning Platform',
      imageUrl: 'assets/images/learning-platform.webp',
      description:
        'An online learning platform with video lessons, quizzes, and a certification system for completed courses.',
      challenges:
        'Managing video streaming efficiently and tracking user progress through quizzes and exams.',
      solutions:
        'Used a content delivery network (CDN) for video streaming and integrated a quiz engine with progress tracking and automated certificate generation.',
      tags: [Tag.Angular, Tag.NodeJS],
    },
    {
      id: 'project-9',
      title: 'Expense Tracker',
      imageUrl: 'assets/images/expense-tracker.webp',
      description:
        'A personal expense tracking tool with reporting features to monitor spending habits and set savings goals.',
      challenges:
        'Visualizing expense data clearly and allowing users to categorize transactions easily.',
      solutions:
        'Used D3.js for interactive data visualizations and provided users with simple categorization options for quick expense management.',
      tags: [Tag.Angular, Tag.NodeJS, Tag.D3],
    },
    {
      id: 'project-10',
      title: 'Stock Market Tracker',
      imageUrl: 'assets/images/stock-tracker.webp',
      description:
        'A stock market tracker that monitors live stock prices, provides portfolio management, and tracks financial news.',
      challenges:
        'Fetching real-time stock data without exceeding API limits and ensuring portfolio values are up to date with market fluctuations.',
      solutions:
        'Used polling intervals to fetch stock data periodically, with WebSockets for real-time updates, and charting libraries to visualize stock trends.',
      tags: [Tag.Angular, Tag.WebSockets],
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsByTag(tag: Tag): Project[] {
    return this.projects.filter((project) => project.tags?.includes(tag));
  }
}
