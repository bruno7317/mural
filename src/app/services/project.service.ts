import { Injectable } from '@angular/core';

export enum Tag {
  Highlight = 'highlight',
  Angular = 'angular',
  Java = 'java',
  SpringFramework = 'spring-framework',
  TypeScript = 'typescript',
  AWS = 'aws',
  AWSLambda = 'aws-lambda',
  DynamoDB = 'dynamodb',
  APIGateway = 'api-gateway',
  Serverless = 'serverless',
  Git = 'git',
  Agile = 'agile',
  GoogleMapsAPI = 'google-maps-api',
  Mentorship = 'mentorship',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  detailImageUrl: string;
  objective: string;
  challenges: string;
  results: string;
  tags?: Tag[];
  demoUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'project-4',
      title: 'Innovative File Comparison',
      imageUrl: 'assets/images/tag-safety.png',
      detailImageUrl: 'assets/images/tag-safety-detail.webp',
      description:
        'Developed a CSV file comparison feature for the TagSafety platform, enabling clients to visualize and reconcile updates against existing electrical safety data. Initially unfamiliar with Grails and Groovy, I leveraged AI-assisted learning to quickly adapt, delivering a streamlined, intuitive tool that surpassed the client’s expectations. Enthusiastic feedback prompted additional feature requests, bringing in new revenue opportunities, and earned me personal commendations from the CEO.',
      objective:
        'To simplify the client’s workflow for updating electrical safety parameters and drive project growth by implementing a dynamic, revenue-generating feature.',
      challenges:
        'Adapting to Grails and Groovy under time constraints and ensuring accurate data comparisons. Overcoming these hurdles demanded rapid skill acquisition, creativity, and effective problem-solving.',
      results:
        'The feature’s success not only delighted the client—leading to expansions and higher revenue—but also reinforced trust in the platform’s capabilities and elevated the company’s reputation for innovation.',
      tags: [
        Tag.Git,
        Tag.Agile,
        Tag.Highlight
      ],
      demoUrl: '/file-comparison-demo'
    },
    {
      id: 'project-1',
      title: 'Google Maps Integration for Sipag App',
      imageUrl: 'assets/images/sipag-google-maps.png',
      detailImageUrl: 'assets/images/sipag-delivery.webp',
      description:
        'Integrated Google Maps API into the Sipag app to enhance vendor registration by enabling precise geolocation. This feature improved accessibility for Cabal workers and delivery drivers, facilitating faster delivery of payment terminals and enhancing overall user experience.',
      objective: 'To improve vendor registration by allowing precise location identification and enabling faster, more reliable delivery of card machines.',
      challenges:
        'Overcame initial inexperience with API integration and addressed the complexities of unreliable addresses and chaotic street layouts in Brazilian cities.',
      results:
        'Significantly improved operational efficiency by enabling precise pin placement on maps. Delivery drivers used Street View to locate vendors, reducing delays caused by address confirmation issues. Vendors received card machines faster, ensuring uninterrupted service and revenue generation for Cabal.',
      tags: [
        Tag.Java,
        Tag.GoogleMapsAPI,
        Tag.Highlight
      ]
    },
    {
      id: 'project-3',
      title: 'Dijkstra’s Algorithm for Vancouver SkyTrain',
      imageUrl: 'assets/images/train-station-algorithm.png',
      detailImageUrl: 'assets/images/train-station-algorithm-detail.webp',
      description:
        'Utilized Dijkstra’s algorithm to implement a shortest-path solution for calculating travel distances between train stations on the Vancouver SkyTrain network. Integrated into the Scadacom platform, this feature provided real-time tracking of total distance traveled by individual trains, informing maintenance schedules and improving operational reliability.',
      objective:
        'To enhance asset reliability and streamline maintenance planning by accurately quantifying distance traveled, thus proactively guiding timely servicing and reducing the risk of unexpected downtime.',
      challenges:
        'Adapting a computationally intensive algorithm for real-time operations, ensuring integration within existing SCADA systems, and balancing efficiency with the complexity of large-scale transportation networks. Additionally, working within legacy code and conducting on-site testing with clients required strong communication and technical adaptability.',
      results:
        'Delivered a refined, fully integrated solution that became instrumental for Vancouver SkyTrain. The system facilitated data-driven maintenance decisions, likely increasing train availability and reliability. Post-launch, coordinated live testing and monitoring with clients in Vancouver ensured smooth adoption and sustained operational benefits.',
      tags: [
        Tag.Highlight
      ]
    },
    {
      id: 'project-2',
      title: 'Intricate Team Leadership & Mentorship',
      imageUrl: 'assets/images/intricate-team.png',
      detailImageUrl: 'assets/images/intricate-team-detail.webp',
      description:
        'Led a team of six Dalhousie University co-op students working on a monolithic application encompassing payroll, employee management, and client-facing features. Employed pair programming to guide newcomers through ticket resolution, instilling confidence, accelerating their learning curve, and ensuring a steady flow of completed tasks. This collaborative approach helped maintain code quality and improved operational smoothness.',
      objective:
        'To streamline the development process, reduce the backlog of pending tickets, and cultivate a supportive, growth-oriented environment for junior developers.',
      challenges:
        'Ensuring that inexperienced team members quickly adapted to a complex codebase and established best practices without landmark features. Maintaining consistent progress despite shifting priorities and the eventual impact of the COVID-19 pandemic.',
      results:
        'Significantly reduced the backlog of tickets and introduced incremental improvements throughout the system. The team’s increased confidence and productivity enhanced the stability and maintainability of the application, reflecting positively on both client satisfaction and internal morale.',
      tags: [
        Tag.Java,
        Tag.SpringFramework,
        Tag.Git,
        Tag.Mentorship,
        Tag.Agile
      ]
    },
    {
      id: 'project-5',
      title: 'Showcasing Full-Stack & Serverless Proficiency',
      imageUrl: 'assets/images/portfolio.png',
      detailImageUrl: 'assets/images/portfolio-detail.png',
      description:
        'Developed a serverless Portfolio application to highlight a broad range of skills, from front-end design to backend integration with AWS resources. This project served as both a learning ground and a demonstrable solution, featuring a fully responsive Angular-based UI and a dynamic AWS-based backend leveraging Lambda, DynamoDB, and API Gateway.',
      objective:
        'To create a self-contained, scalable, and easily maintainable platform for showcasing professional experience, technical aptitude, and creativity. The goal was to demonstrate adaptability, problem-solving, and end-to-end application development capabilities.',
      challenges:
        'Adapting quickly to unfamiliar technologies in AWS, learning new front-end and architectural patterns on the fly, and maintaining code quality while integrating multiple services. Managing project timelines, prioritizing features, and ensuring seamless communication between the front end and backend components.',
      results:
        'Successfully launched a fully functional, serverless Portfolio application that provided a tangible platform for demonstrating multifaceted skills. By overcoming technical hurdles and mastering new AWS services, achieved a robust solution that not only showcased proficiency but also reinforced confidence in tackling complex full-stack projects.',
      tags: [
        Tag.Angular,
        Tag.TypeScript,
        Tag.AWS,
        Tag.AWSLambda,
        Tag.DynamoDB,
        Tag.APIGateway,
        Tag.Serverless
      ]
    }
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsByTag(tag: Tag): Project[] {
    return this.projects.filter((project) => project.tags?.includes(tag));
  }
}
