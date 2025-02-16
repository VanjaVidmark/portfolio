import diseasy1 from "@/assets/diseasy.png";
import diseasy2 from "@/assets/diseasy2.svg";
import pp1 from "@/assets/planning-poker1.png";
import pp2 from "@/assets/planning-poker2.svg";
import ht1 from "@/assets/habit-tracker1.png"
import ht2 from "@/assets/habit-tracker2.svg"
import kthLogo from "@/assets/KTH-logo.webp";
import scaniaLogo from "@/assets/scania-logo.png";


export type Project = {
  id: string;
  name: string;
  description: string;
  intro: string;
  functionality: string;
  techStack: string;
  image: string;
  bigImage: string;
  logo?: string;
  repo?: string;
  otherLink?: string;
  otherLinkText?: string;
};

const projects: Project[] = [
  {
    id: "1",
    name: "Planning Poker",
    description: "Summer job as full-stack developer",
    intro: "During the summer of 2024 I worked as a full-stack developer at Scania. I implemented a Planning Poker feature on an internal website, that is now used actively used by Scania employees. It was a great learning experience and made me excited to work on more full-stack projects.",
    functionality: "The functionality include managing several planning poker rooms, adding user stories, voting, calculating and displaying estimates of each user story, as well as managing player roles.",
    techStack: "The website uses Angular for the frontend and Java (Spring Boot) for the backend. MySQL was used as the database.",
    image: pp1,
    bigImage: pp2,
    logo: scaniaLogo,
    otherLink: "https://drive.google.com/file/d/1eXgjGEAfLwrsW35Xm6nqxGbfGIHCMyHS/view?usp=drive_link", 
    otherLinkText: "Click here to have a closer look at the feature!"
  },
  {
    id: "2",
    name: "Habit Tracker",
    description: "Cross-platform app side project",
    intro: "As part of Netlight Tech Avenue 2024, I developed a Habit Tracker API in Kotlin. Inspired by this, I built a Kotlin Multiplatform frontend to explore mobile app development. ",
    functionality: "The app allows users to create new habits by specifying their goals and desired frequency. Users can log entries each time they complete a habit, enabling them to track their progress over time.",
    techStack: "The API is in Kotlin, with a postgreSQL database. The frontend is written in Kotlin Multiplatform, and has shared business and presentation logic between Android and iOS, however I have only had time to add styling to the andriod UI so far. I will also add more funcitonality and give the Andriod UI some more love when I have time!", 
    image: ht1,
    bigImage: ht2,
    repo: "https://github.com/VanjaVidmark/HabitTracker",
  },
  {
    id: "3",
    name: "Diseasy",
    description: "Interaction Programming Project",
    intro: "Diseasy is a web app I did as a group project with three other students in an interaction programming course, which sparked my interest in web-programming.",
    functionality: "It works by entering your age, gender and symptoms, and with help from a Symptom Checker API (by ApiMedic), a list of possible diagnoses are given. Note that we are using a free version of th API so the results are limited.",
    techStack: "The app is written in React and uses Firebase for authentication and data storage.",
    image: diseasy1,
    bigImage: diseasy2,
    logo: kthLogo,
    repo: "https://github.com/VanjaVidmark/Diseasy-app",
    otherLink: "https://diseasy-b3cf3.web.app",
    otherLinkText: "Click here to try it out!"
  },
];
/*
{
    id: "4",
    name: "Sign language classifier",
    description: "Machine Learning Project",
    intro: "For a machine learning project, my group of four developed a sign language classifier capable of recognizing each letter of the alphabet.",
    functionality: "The model was trained on thousands of images of hands forming letters. We converted these images into 21 hand coordinates and trained several models using this data.",
    techStack: "We connected the classifier to the computer's webcam to provide real-time predictions.",
    image: diseasy1,
    bigImage: diseasy2,
    logo: kthLogo,
    repo: "https://github.com/VanjaVidmark/ASLClassifier"
  },
*/

export default projects;
