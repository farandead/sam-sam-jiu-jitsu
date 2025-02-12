// import {
//     benefitIcon1,
//     benefitIcon2,
//     benefitIcon3,
//     benefitIcon4,
//     benefitImage2,
//     chromecast,
//     disc02,
//     discord,
//     discordBlack,
//     facebook,
//     figma,
//     file02,
//     framer,
//     homeSmile,
//     instagram,
//     notification2,
//     notification3,
//     notification4,
//     notion,
//     photoshop,
//     plusSquare,
//     protopie,
//     raindrop,
//     recording01,
//     recording03,
//     roadmap1,
//     roadmap2,
//     roadmap3,
//     roadmap4,
//     searchMd,
//     slack,
//     sliders04,
//     telegram,
//     twitter,
//     yourlogo,
//   } from "../assets";
import image1 from "../assets/images/highquality/image3.png";
import image2 from "../assets/images/highquality/image4.png";
import image3 from "../assets/images/highquality/image5.png";
import image4 from "../assets/images/highquality/image6.png";
import image5 from "../assets/images/highquality/image7.png";
import image6 from "../assets/images/highquality/image8.png";
import image7 from "../assets/images/highquality/image9.png";
import image8 from "../assets/images/highquality/image10.png";
import image9 from "../assets/images/highquality/image11.png";
import image10 from "../assets/images/highquality/image12.png";
import image11 from "../assets/images/highquality/image13.png";
import image12 from "../assets/images/highquality/image14.png";

import coach1 from "../assets/images/coach1.png";
import coach2 from "../assets/images/coach1.png";

export const parallaxImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];
export const navigation = [
  {
    id: "0",
    title: "Book Free Trial",
    url: "/book-free-trial",
  },
  {
    id: "1",
    title: "Our Memberships",
    url: "/our-memberships",
  },

  {
    id: "5",
    title: "Classes",
    url: "#",
    dropdown: [
      {
        title: "All Levels Skill Building Class (Gi)",
        url: "/classes/skill-building-gi",
      },
      {
        title: "Situational/Full Sparring & Drills Class (No Gi)",
        url: "/classes/sparring-drills-no-gi",
      },
      {
        title: "Kids Class",
        url: "/classes/kids",
      },
      {
        title: "Open Mat/Revision Class",
        url: "/classes/open-mat-revision",
      },
    ],
    backgroundImage: "/assets/images/highquality/image13.png", // Replace with actual image path
  },
  
  {
    id: "2",
    title: "Schedule",
    url: "/class_schedule",
  },
  {
    id: "3",
    title: "Meet the Coaches",
    url: "/meet-the-coach",
  },
  {
    id: "4",
    title: "FAQ",
    url: "/faq",
  },
  
];
export const FAQ_DATA = {
  "General Questions": [
    {
      question: "What is Brazilian Jiu-Jitsu (BJJ)?",
      answer:
        "Brazilian Jiu-Jitsu is a martial art and combat sport that focuses on grappling, ground fighting, and submissions. It's designed to help a smaller person defend against a bigger, stronger opponent by using leverage and technique.",
    },
    {
      question: "Is BJJ suitable for beginners?",
      answer:
        "Yes! BJJ is suitable for beginners, and many academies offer classes specifically for those just starting.",
    },
    {
      question: "Is BJJ suitable for beginners?",
      answer:
        "Yes! BJJ is suitable for beginners, and many academies offer classes specifically for those just starting.",
    },
  ],
  "Training Information": [
    {
      question: "What should I wear to my first class?",
      answer:
        "For your first class, you should wear comfortable gym clothes. Many academies will provide a uniform (gi) after you sign up.",
    },
    {
      question: "How often should I train BJJ?",
      answer:
        "It depends on your schedule and goals. Beginners can start with 2-3 classes per week and adjust as they progress.",
    },
  ],
  "Membership & Fee": [
    {
      question: "How much does a BJJ membership cost?",
      answer:
        "Membership fees vary by academy, but typical pricing ranges from £50-£120 per month, depending on location and the number of classes you attend.",
    },
    {
      question: "Do I need to sign a contract?",
      answer:
        "Some academies require contracts, while others offer month-to-month memberships. It's best to ask the academy you're interested in for specifics.",
    },
  ],
  "Getting Started": [
    {
      question: "What should I bring to my first class?",
      answer:
        "You should bring water, a towel, and comfortable workout clothes. If you have a gi (uniform), bring that as well.",
    },
    {
      question: "How do I find the right BJJ academy?",
      answer:
        "Visit different academies to observe classes and meet instructors. Choose one that has a welcoming environment and meets your goals.",
    },
  ],
};
// constants/index.js
export const COACHES = [
  {
    name: "COACH SAM !",
    role: "FOUNDER | COACH",
    description: `Coach Sam, a dedicated Black Belt in Brazilian Jiu-Jitsu, has over a decade of experience. He’s known for his hands-on teaching style, breaking down techniques to make them easy to learn for all skill levels. Whether you're training for competition or personal growth, Coach Sam provides focused, personalized instruction in a supportive environment, helping you reach your full potential on the mat.`,
    image: coach1, // Replace with actual image path
  },
  {
    name: "COACH JANE !",
    role: "ASSISTANT COACH",
    description: `Coach Jane has a background in both Jiu-Jitsu and wrestling, bringing a unique blend of techniques to her teaching. She focuses on creating a supportive and fun environment for students of all ages.`,
    image: coach1, // Replace with actual image path
  },
  // Add more coaches as needed
];

export const classSchedule = [
  {
    day: "Monday",
    classes: [
      {
        className: "All Levels Skill Building Class (Gi)",
        times: ["19:30pm - 21:00pm"],
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        className: "Situational/Full Sparring & Drills Class (No Gi)",
        times: ["19:30pm - 21:00pm"],
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        className: "All Levels Skill Building Class (Gi)",
        times: ["18:00pm - 19:00pm"],
      },
      {
        className: "Kids Class",
        times: ["17:30 - 18:00"],
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        className: "Open Mat/Revision Class (Members/Invite Only)",
        times: ["19:30pm - 21:00pm"],
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      {
        className: "All Levels Skill Building Class (No Gi)",
        times: ["10:00am - 12:00pm"],
      },
    ],
  },
];

//   export const brainwaveServices = [
//     "Photo generating",
//     "Photo enhance",
//     "Seamless Integration",
//   ];

//   export const brainwaveServicesIcons = [
//     recording03,
//     recording01,
//     disc02,
//     chromecast,
//     sliders04,
//   ];

//   export const roadmap = [
//     {
//       id: "0",
//       title: "Voice recognition",
//       text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//       date: "May 2023",
//       status: "done",
//       imageUrl: roadmap1,
//       colorful: true,
//     },
//     {
//       id: "1",
//       title: "Gamification",
//       text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//       date: "May 2023",
//       status: "progress",
//       imageUrl: roadmap2,
//     },
//     {
//       id: "2",
//       title: "Chatbot customization",
//       text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//       date: "May 2023",
//       status: "done",
//       imageUrl: roadmap3,
//     },
//     {
//       id: "3",
//       title: "Integration with APIs",
//       text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//       date: "May 2023",
//       status: "progress",
//       imageUrl: roadmap4,
//     },
//   ];

//   export const collabText =
//     "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

//   export const collabContent = [
//     {
//       id: "0",
//       title: "Seamless Integration",
//       text: collabText,
//     },
//     {
//       id: "1",
//       title: "Smart Automation",
//     },
//     {
//       id: "2",
//       title: "Top-notch Security",
//     },
//   ];

//   export const collabApps = [
//     {
//       id: "0",
//       title: "Figma",
//       icon: figma,
//       width: 26,
//       height: 36,
//     },
//     {
//       id: "1",
//       title: "Notion",
//       icon: notion,
//       width: 34,
//       height: 36,
//     },
//     {
//       id: "2",
//       title: "Discord",
//       icon: discord,
//       width: 36,
//       height: 28,
//     },
//     {
//       id: "3",
//       title: "Slack",
//       icon: slack,
//       width: 34,
//       height: 35,
//     },
//     {
//       id: "4",
//       title: "Photoshop",
//       icon: photoshop,
//       width: 34,
//       height: 34,
//     },
//     {
//       id: "5",
//       title: "Protopie",
//       icon: protopie,
//       width: 34,
//       height: 34,
//     },
//     {
//       id: "6",
//       title: "Framer",
//       icon: framer,
//       width: 26,
//       height: 34,
//     },
//     {
//       id: "7",
//       title: "Raindrop",
//       icon: raindrop,
//       width: 38,
//       height: 32,
//     },
//   ];

//   export const pricing = [
//     {
//       id: "0",
//       title: "Basic",
//       description: "AI chatbot, personalized recommendations",
//       price: "0",
//       features: [
//         "An AI chatbot that can understand your queries",
//         "Personalized recommendations based on your preferences",
//         "Ability to explore the app and its features without any cost",
//       ],
//     },
//     {
//       id: "1",
//       title: "Premium",
//       description: "Advanced AI chatbot, priority support, analytics dashboard",
//       price: "9.99",
//       features: [
//         "An advanced AI chatbot that can understand complex queries",
//         "An analytics dashboard to track your conversations",
//         "Priority support to solve issues quickly",
//       ],
//     },
//     {
//       id: "2",
//       title: "Enterprise",
//       description: "Custom AI chatbot, advanced analytics, dedicated account",
//       price: null,
//       features: [
//         "An AI chatbot that can understand your queries",
//         "Personalized recommendations based on your preferences",
//         "Ability to explore the app and its features without any cost",
//       ],
//     },
//   ];

//   export const benefits = [
//     {
//       id: "0",
//       title: "Ask anything",
//       text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//       backgroundUrl: "assets/benefits/card-1.svg",
//       iconUrl: benefitIcon1,
//       imageUrl: benefitImage2,
//     },
//     {
//       id: "1",
//       title: "Improve everyday",
//       text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//       backgroundUrl: "assets/benefits/card-2.svg",
//       iconUrl: benefitIcon2,
//       imageUrl: benefitImage2,
//       light: true,
//     },
//     {
//       id: "2",
//       title: "Connect everywhere",
//       text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//       backgroundUrl: "assets/benefits/card-3.svg",
//       iconUrl: benefitIcon3,
//       imageUrl: benefitImage2,
//     },
//     {
//       id: "3",
//       title: "Fast responding",
//       text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//       backgroundUrl: "assets/benefits/card-4.svg",
//       iconUrl: benefitIcon4,
//       imageUrl: benefitImage2,
//       light: true,
//     },
//     {
//       id: "4",
//       title: "Ask anything",
//       text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
//       backgroundUrl: "assets/benefits/card-5.svg",
//       iconUrl: benefitIcon1,
//       imageUrl: benefitImage2,
//     },
//     {
//       id: "5",
//       title: "Improve everyday",
//       text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//       backgroundUrl: "assets/benefits/card-6.svg",
//       iconUrl: benefitIcon2,
//       imageUrl: benefitImage2,
//     },
//   ];

// //   export const socials = [
// //     {
// //       id: "0",
// //       title: "Discord",
// //       iconUrl: discordBlack,
// //       url: "#",
// //     },
// //     {
// //       id: "1",
// //       title: "Twitter",
// //       iconUrl: twitter,
// //       url: "#",
// //     },
// //     {
// //       id: "2",
// //       title: "Instagram",
// //       iconUrl: instagram,
// //       url: "#",
// //     },
// //     {
// //       id: "3",
// //       title: "Telegram",
// //       iconUrl: telegram,
// //       url: "#",
// //     },
// //     {
// //       id: "4",
// //       title: "Facebook",
// //       iconUrl: facebook,
// //       url: "#",
// //     },
// //   ];
