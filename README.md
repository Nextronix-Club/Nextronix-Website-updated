# 🌐 Nextronix Website – Robotics Club of UTD CSVTU


## Overview

Nextronix is a technical club that focuses on robotics, embedded systems, and advanced technology projects. This website serves as our digital presence to showcase our:
- Team members and leadership
- Projects and achievements
- Events and workshops
- Club activities

This is the official repository for the **Nextronix** Robotics Club website, at:  
🔗 **https://nextronixutd.tech**


## Project Structure

```
nx/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Header/            # Navigation and header components
│   │   │   ├── Footer/            # Footer components
│   │   │   ├── TeamCard/          # Team member display components
│   │   │   ├── ProjectCard/       # Project showcase components
│   │   │   └── EventCard/         # Event display components
│   │   ├── pages/                 # Page components
│   │   │   ├── Home/             # Homepage components
│   │   │   ├── Team/             # Team page components
│   │   │   ├── Projects/         # Projects page components
│   │   │   └── Events/           # Events page components
│   │   ├── data/                 # Static data files
│   │   │   ├── teamData.js       # Team member information
│   │   │   ├── projectData.js    # Project details
│   │   │   └── eventsData.js     # Event information
│   │   └── assets/              # Static assets
│   └── index.html               # Entry HTML file
│
├── server/                      # Backend Express server
│   ├── index.ts                # Server entry point
│   ├── routes.ts               # API route definitions
│   ├── vite.ts                # Vite server configuration
│   └── tsconfig.json          # TypeScript configuration
│
├── shared/                     # Shared utilities and types
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Shared utility functions
│
├── attached_assets/           # Project assets
│   ├── mentor1.jpg           # Team member images
│   ├── mentor2.jpg
│   ├── leader-1.jpg
│   ├── leader-2.jpg
│   ├── Projects/             # Project images
│   │   ├── Human-following-robot.jpg
│   │   ├── IEri-Robot.jpg
│   │   ├── Gesture-controlled-Robot-arm.jpg
│   │   ├── line-following-car.jpg
│   │   └── Sonar-sensor.jpg
│   └── Events/               # Event images
│       ├── Event-1.jpg
│       ├── Event-2.jpg
│       ├── Event-3.jpg
│       ├── Event-4.jpg
│       └── Event-5.jpg
│
├── vite.config.ts            # Vite configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```


## Detailed Features

### 1. Team Management
- Hierarchical team structure display
- Individual profiles for all members
- Role-based member categorization (Mentors, Leaders, Technical, PR)
- Social links and contact information

### 2. Project Showcase
- Detailed project descriptions
- Technology stack for each project
- Project images and documentation
- GitHub repository links
- Live demo links (where available)

### 3. Event Management
- Chronological event timeline
- Workshop details and registration
- Event photo galleries
- Speaker information
- Resource links

## License

Copyright © 2024 Nextronix Club. All rights reserved.

