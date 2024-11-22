// src/data/portfolio.js
export const portfolioData = {
  ascii_art: `
          _____                    _____          
         /\\    \\                  /\\    \\         
        /::\\    \\                /::\\____\\        
       /::::\\    \\              /:::/    /        
      /::::::\\    \\            /:::/    /         
     /:::/\\:::\\    \\          /:::/    /          
    /:::/  \\:::\\    \\        /:::/____/           
   /:::/    \\:::\\    \\      /::::\\    \\           
  /:::/    / \\:::\\    \\    /::::::\\____\\________  
 /:::/    /   \\:::\\    \\  /:::/\\:::::::::::\\    \\ 
/:::/____/     \\:::\\____\\/:::/  |:::::::::::\\____\\
\\:::\\    \\      \\::/    /\\::/   |::|~~~|~~~~~     
 \\:::\\    \\      \\/____/  \\/____|::|   |          
  \\:::\\    \\                    |::|   |          
   \\:::\\    \\                   |::|   |          
    \\:::\\    \\                  |::|   |          
     \\:::\\    \\                 |::|   |          
      \\:::\\    \\                |::|   |          
       \\:::\\____\\               \\::|   |          
        \\::/    /                \\:|   |          
         \\/____/                  \\|___|   
`,
  name: "Chris Kontsis",
  title: "Software Engineer",
  bio: "I am a full-time Computer Science student driven to create impactful software solutions.",
  linkedin: "https://linkedin.com/in/ckontsis/",
  github: "https://github.com/chriskontsis/",
  work: [
    {
      company: "Capital One",
      role: "Software Engineer Intern",
      period: "June 2024 -- August 2024",
      highlights: [
        `Enhanced the Test Data Management CLI, a command-line tool that automates testing workflows for over 
        40 teams, enabling live dependency testing with 0 human intervention.`,
      ],
    },
    {
      company: "Lumen Technologies",
      role: "Software Engineer Intern",
      period: "June 2023 -- August 2023",
      highlights: [
        `Improved Lumen's email intent AI model, which predicts over 20 customer 
        intents to automate responses to common inquiries across the organization.`
      ],
    },
    {
      company: "Meteor Studio at ASU",
      role: "Software Developer",
      period: "January 2023 -- May 2023",
      highlights: [
        `Developed “Career XRcade”, a VR app with more than 40 mini-games and interactive 
        experiences aimed at empowering students in envisioning their future careers.`
      ],
    },
  ],
  projects: [
    {
      name: "Lite-Exchange",
      github: "https://github.com/chriskontsis/Lite-Exchange",
      tech: ["C++", "Boost", "CMake", "FIX"],
      description: `Developing a multi-threaded, FIX-based, client-server system in C++ for transmitting and processing 
      diverse order types (limit, market, cancel) through an order matching engine`,
    },
    {
      name: "AI Tunes",
      github: "https://github.com/chriskontsis/AiTunes",
      tech: [
        "Python",
        "Pandas",
        "Numpy",
        "Scikit-learn",
        "Matplotlib",
        "React",
        "Flask",
      ],
      description:
        "Engineered a content-based music recommendation system delivering personalized song suggestions with Spotify links",
    },
    {
      name: "412 Media",
      github: "https://github.com/chriskontsis/412Media",
      tech: ["React", "Express", "Node.js", "PostgreSQL"],
      description: `Led a 3 person team to build an Instagram-like social platform, 
      implementing functionalities such as photo sharing, following, and liking/commenting`,
    },
  ],
  blog: [
    {
      title: "Coming Soon",
      date: "",
      tags: [],
    },
  ],
};
