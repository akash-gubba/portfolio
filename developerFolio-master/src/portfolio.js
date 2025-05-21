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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web  with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
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
      companylogo: require("./assets/images/hexagonlogo.png"), // Make sure to add this logo in your assets/images folder
      date: "July 2024 – April 2025",
      desc: "Worked on full-stack development projects and contributed to real-world AI solutions across web platforms.",
      descBullets: [
        "Converted Angular frontend to React, boosting performance and maintainability",
        "Integrated GraphQL APIs and developed real-time JSON data viewers using React + Redux",
        "Set up CI/CD pipelines with AWS Amplify and implemented secure auth using AWS Cognito",
        "Built chatbot feedback form and deployed React app on Azure Web App with DevOps pipelines"
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
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
