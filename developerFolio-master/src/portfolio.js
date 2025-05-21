/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akash Gubba",
  title: "Hi all, I'm Akash",
  subTitle: emoji(
    "Aspiring Full Stack & AI Developer with hands-on experience building scalable web apps using React, Redux, Django, and GraphQL. Skilled in deploying cloud-native solutions with Azure & AWS. Passionate about integrating AI into real-world products, with experience in LLMs, LangChain, and building intelligent tools like LinkedIn data extractors and chatbots."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qdAyj7wFqgFulZbKF2L7B00FLSEKFyBI/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gubba1806",
  linkedin: "https://www.linkedin.com/in/akash-gubba-a6689122a/",
  gmail: "gubbaakash18@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEV WHO LOVES BUILDING COOL STUFF THAT WORKS 🔥",
  skills: [
    emoji("⚡ Built scalable, full-stack apps using React, Node.js, Django & MongoDB"),
    emoji("⚡ Converted entire Angular frontend to React for a real-world enterprise product"),
    emoji("⚡ Integrated GraphQL APIs and real-time data viewers for interactive UIs"),
    emoji("⚡ Setup CI/CD using AWS Amplify + Azure DevOps with secure auth via AWS Cognito"),
    emoji("⚡ Built and deployed machine learning and NLP projects with cool use cases"),
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Redux", fontAwesomeClassname: "fas fa-code-branch" }, // custom icon for Redux
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Django", fontAwesomeClassname: "fab fa-python" },
    { skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram" }, // no direct icon
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Azure", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-tools" },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chaitanya Bharathi Institute of Technology (CBIT)",
      logo: require("./assets/images/cbitlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "December 2021 - April 2025",
      descBullets: [
        "CGPA: 9.02/10",
        "Built multiple real-world full-stack projects and contributed to AI-based systems",
        "Gained strong foundational skills in Data Structures, Algorithms, and Cloud Computing"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / UI Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / API Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming / DSA",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps / Cloud (Azure & AWS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning / AI",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Hexagon Capability Center India (HCCI)",
      companylogo: require("./assets/images/hexagonlogo.png"),
      date: "July 2024 – April 2025",
      desc: "Contributed to multiple full-stack enterprise-level projects, handling scalable frontend migrations, backend API design, DevOps deployment, and cloud authentication solutions. Worked in a fast-paced agile environment, collaborating with cross-functional teams to deliver impactful AI-powered web features.",
      descBullets: [
        " Migrated the legacy Angular frontend to React with improved routing, component modularity, and performance, resulting in ~30% faster load times.",
        " Built and integrated dynamic UIs using React + Redux Toolkit + Shadcn UI for key features like feedback collection in chatbot interface.",
        " Integrated GraphQL APIs to dynamically fetch and render backend data, with real-time JSON comparison viewer for input-output validation.",
        " Implemented secure, role-based user authentication using AWS Cognito with JWT support, improving platform access management.",
        " Set up automated CI/CD pipelines using AWS Amplify & Azure DevOps for seamless development-to-deployment flow.",
        " Developed and consumed RESTful APIs in Python (Django), enabling key front-end functionalities and real-time validations.",
        " Deployed final web app to Azure Web App, using Azure DevOps for version control and efficient collaborative workflows."
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "REAL-WORLD PROJECTS THAT SHOWCASE MY FULL-STACK POWER 💪",
  projects: [
    {
      image: require("./assets/images/goFoodLogo.png"), // Add an image of the GoFood app or use a placeholder
      projectName: "GoFood",
      projectDesc: "A full-stack food delivery app built using the MERN stack with features like category filtering, favorites, and optimized search.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Gubba1806/GoFood"
        }
      ]
    },
    {
      image: require("./assets/images/heartcareLogo.png"), // Add a logo or UI preview of the hospital system
      projectName: "Heartcare",
      projectDesc: "Hospital management system with appointment booking, emergency call/email feature, and instant confirmation—built with Django.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Gubba1806/heartcareproject"
        }
      ]
    },
    {
      image: require("./assets/images/linkedinToolLogo.png"), // Optional: use a scraping icon or LinkedIn logo
      projectName: "LinkedIn Profile Data Extractor",
      projectDesc: "Automated tool that uses Scrapin API + GPT-4 (via LangChain) to pull insights from LinkedIn profiles for data enrichment.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Gubba1806"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Some Cool Stuff I’ve Done!",

  achievementsCards: [
    {
      title: "Software Engineer Intern @ Hexagon (HCCI)",
      subtitle:
        "Interned at Hexagon Capability Center India. Migrated Angular frontend to React, built and consumed Django APIs, deployed using Azure Web Apps, and contributed to full-stack development.",
      image: require("./assets/images/hexagonlogo.png"),
      imageAlt: "Hexagon Logo",
      footerLink: [
        {
          name: "Hexagon Website",
          url: "https://hexagon.com/"
        }
      ]
    },
    {
      title: "300+ Problems Solved on LeetCode",
      subtitle:
        "Strengthened data structures and algorithms by solving over 300 problems. Focused on optimizing solutions and improving time complexity.",
      image: require("./assets/images/leetcode.png"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/your_leetcode_username"
        }
      ]
    },
    {
      title: "2⭐ Coder on CodeChef",
      subtitle:
        "Achieved 2-star rating by participating in rated contests and solving algorithmic challenges.",
      image: require("./assets/images/codechef.png"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "CodeChef Profile",
          url: "https://www.codechef.com/users/your_codechef_username"
        }
      ]
    },
    {
      title: "Certification in Azure AI Fundamentals",
      subtitle:
        "Completed a certification course from Azure .Learned about AI concepts, Azure services, and ethical considerations.",
      image: require("./assets/images/azure.png"),
      imageAlt: "PWA Certification",
      footerLink: [
        {
          name: "Azure Profile",
          // url: "https://www.codechef.com/users/your_codechef_username"
        }
      ]
    },
    {
      title: "Certification in Machine Learning & Deep Learning",
      subtitle:
        "Studied core concepts of ML and DL, including supervised learning, neural networks, and model evaluation techniques.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "ML Logo",
      footerLink: [
        {
          name: "NPTEL Profile",
          url: "https://www.codechef.com/users/your_codechef_username"
        }
      ]

    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919948032980",
  email_address: "gubbaakash18@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
