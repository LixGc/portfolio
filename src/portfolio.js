// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Felix Giancarlo",
  message:
    "I'm an aspiring software engineer, deeply passionate about programming and fueled by curiosity. I thrive on exploring new technologies, solving complex problems, and making a meaningful impact through code.",
  basedLocation: "Indonesia",
  resumeLink: "https://drive.google.com/file/d/1P-QKEJEHbE9oWc8X2vMTwbSeZOq4fdW4/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLink: "images/portrait.jpg",
};

const socialMediaLinks = {
  github: "https://github.com/LixGc",
  linkedin: "https://www.linkedin.com/in/felix-giancarlo-9a6b51269/",
  medium: "",
  stackoverflow: "",
  xtwitter: "",
}; // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "My name is Felix Giancarlo and I'm an 18 year's old fresh graduate from Hacktiv8 Indonesia's Fullstack Javascript and Crafting Scalable Go-App bootcamp progam. I have a passion on coding.",
    "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner.",
  ], // Separated items are paragraphs
  techStack: ["Go-lang", "React.js", "JavaScript", "Vue.js", "MySQL", "R.Native"],
  photo1Link: "images/portrait1.jpeg",
  photo2Link: "images/portrait2.jpeg",
  photo3Link: "images/portrait3.jpeg",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "Datacom Software Development",
    company: {
      name: "Certificate",
      link: "https://drive.google.com/file/d/121u91eDNtFZwV2fP1WvtvH2DUbO0Hv-d/view?usp=drive_link",
    },
    duration: "",
    bulletPoints: [
      "Completed a simulation focussed on how the software development team at Datacom.",
      "Reviewed a web application and planned for future improvements.",
      "Identified the root cause of bugs and implemented a fix to improve the application.",
    ],
    hashtags: [],
  },
  {
    position: "AWS APAC Solutions Architecture",
    company: {
      name: "Certificate",
      link: "https://drive.google.com/file/d/11WCgKrwgUOxwDRABw5XrXUAAdIngHWup/view?usp=drive_link",
    },
    duration: "",
    bulletPoints: [
      "Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times.",
      "Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.",
    ],
    hashtags: [],
  },
  {
    position: "Skyscanner Front-End Software Engineering",
    company: {
      name: "Certificate",
      link: "https://drive.google.com/file/d/11nkXPaRhAylHNHQxw5SJUKKcEw9G7_1E/view?usp=drive_link",
    },
    duration: "",
    bulletPoints: [
      "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
      "Developed a page for picking a travel date using Skyscanner’s open-sourceBackpack React library.",
      "Customize my application and run automated tests to ensure it is rendered properly.",
    ],
    hashtags: [],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "RentNRoll Mobile App",
    yearCompleted: "2023",
    description:
      "Tackling travel rental hurdles, me and my team created Rent N Roll: an application for seamless vehicle rentals where you can rent your vehicles or rent other people's vehicle. With location-based searches, easy booking, and secure payments with MidTrans, it also comes with chatting feature and nodemailer for sending the OTP verification code. Developed in a week by my team and me.",
    techStack: "Javascript, React Native",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/LixGc/Rent-N-Roll.git",
      },
      {
        label: "",
        type: "external",
        url: "https://youtu.be/ecqwD2vaOog?si=msF9QYTk-hvZAl54",
      },
    ],
    imageLink: "images/RentnRoll.png",
    alignLeft: false,
  },
  {
    projectName: "FELIX's BISTRO",
    yearCompleted: "2021",
    description:
      "Introducing Felix Bistro Web Application, an innovative food ordering website developed with precision during the intense Hacktiv8 Bootcamp Program in under a week. This dynamic platform brings the ease and convenience of onsite food ordering right to your fingertips, it uses MidTrans as the payment and also comes with Google-Login and nodemailer.",
    techStack: "Javascript, Vue.js",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/LixGc/Felix-Bistro",
      },
      {
        label: "",
        type: "external",
        url: "https://youtu.be/P_Q3i1TacFw",
      },
    ],
    imageLink2: "images/felix_bistro2.png",
    imageLink: "images/felix_bistro.png",
    alignLeft: true,
  },
  {
    projectName: "Olive Garden Mobile",
    yearCompleted: "2021",
    description:
      "A mobile application crafted with React Native, drawing inspiration from the Olive Garden Mobile app. It lets users seamlessly explore menus and delve into comprehensive menu details.",
    techStack: "React Native, Javascript, Expo Go",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/LixGc/Olive-Garden-Mobile-App",
      },
      {
        label: "",
        type: "external",
        url: "https://youtube.com/shorts/IQBj2m0NyVA?feature=share",
      },
    ],
    imageLink: "images/OliveGarden_Mobile.png",
    alignLeft: false,
  },
  {
    projectName: "Olive Garden Website",
    yearCompleted: "2020",
    description:
      "Introducing a React.js website inspired by Olive Garden made in less than 1 week during Hacktiv8 Fullstack bootcamp progam. It includes user and admin side. User can explore menus effortlessly, while administrators manage registration, login, and menu customization with ease. Streamlining the online experience for both users and admins.",
    techStack: "React.js, Javascript",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/LixGc/Olive-Garden-Website-Application",
      },
      {
        label: "",
        type: "external",
        url: "https://youtu.be/7TZGkALpe-k", //https://codepen.io/Max_the_coder/pen/yLXZOYL
      },
    ],
    imageLink: "images/OliveGarden_Web.png",
    alignLeft: true,
  },
  {
    projectName: "Admin Dashboard",
    yearCompleted: "2020",
    description:
      "A desktop website application built with React.js and JavaScript, featuring a simple user dashboard which shows the total user, today's session and etc, it also have reset name and password feature, and comes with nodemailer for sending verification link, made with React.js, it includes Google-Login and Facebook-Login, made within 4 days.",
    techStack: "React.js, Javascript",
    links: [
      {
        label: "",
        type: "git",
        url: "https://github.com/LixGc/Incit-Fullstack-Project",
      },
      {
        label: "",
        type: "external",
        url: "https://youtu.be/-e7BUno2QQQ", //https://codepen.io/Max_the_coder/pen/yLXZOYL
      },
    ],
    imageLink: "images/Admin_Reactjs.png",
    alignLeft: false,
  },
];

const archiveLink = "https://github.com/LixGc";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "Get in Touch",
    note: [
      "Currently seeking web and software development positions/internships in Indonesia or other countries.",
      // "Also looking to build a team for projects & startup ideas or just make professional connections.",
    ], // paragraph breaks will be entered after each item,
    link: {
      email: "", // email takes precedance
      other: "https://www.linkedin.com/in/felix-giancarlo-9a6b51269/",
    },
    responseTimeMessage: "...and I'll resopnd within the next 24hrs",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

export default {
  colors,
  transitions,
  splashScreen,
  greeting,
  socialMediaLinks,
  about,
  experiences,
  works,
  archiveLink,
  contact,
};
