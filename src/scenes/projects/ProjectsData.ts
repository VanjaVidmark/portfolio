import diseasy1 from "@/assets/diseasy.png";
import diseasy2 from "@/assets/deseasy-big.png";
import pp1 from "@/assets/planning-poker1.png";
import pp2 from "@/assets/planning-poker-big.png";
import kthLogo from "@/assets/KTH-logo.webp";
import scaniaLogo from "@/assets/scania-logo.png";


export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  techStack: string;
  image: string;
  bigImage: string;
  logo?: string;
  year: number;
};

const projects: Project[] = [
  {
    id: "1",
    name: "Planning Poker",
    shortDescription: "Full-stack summer job at Scania",
    description: "During the summer of 2024 I worked as a full-stack developer at Scania. I implemented a Planning Poker feature on an internal website, that is now used by Scania employees. It was a great learning experience and made me excited to work on more full-stack projects.",
    techStack: "The website was generated using JHipster, with Angular for the frontend and Java (Spring Boot) for the backend. MySQL was used as the database.",
    image: pp1,
    bigImage: pp2,
    logo: scaniaLogo,
    year: 2024,
  },
  {
    id: "2",
    name: "Habit Tracker",
    shortDescription: "Cross-platform app project",
    description: "As part of Netlight Tech Avenue, I developed a Habit Tracker API in Kotlin. Inspired by this, I built a Kotlin Multiplatform frontend to explore mobile app development. The app allows users to create new habits by specifying their goals and desired frequency. Users can log entries each time they complete a habit, enabling them to track their progress over time.",
    techStack: "The API is in Kotlin, with a postgreSQL database and uses Ktor for all API communicaiton. The frontend is written in Kotlin Multiplatform, and has shared business and presentation logic between Android and iOS, however I have only had time to add styling to the andriod app so far. ", 
    image: diseasy1,
    bigImage: diseasy2,
    year: 2025,
  },
  {
    id: "3",
    name: "Diseasy",
    shortDescription: "Interaction programming project",
    description: "lalalalalala",
    techStack: "lalalalalala",
    image: diseasy1,
    bigImage: diseasy2,
    logo: kthLogo,
    year: 2023,
  },
  {
    id: "4",
    name: "Sign language classifier",
    shortDescription: "Machine Learning Project",
    description: "lalalalalala",
    techStack: "lalalalalala",
    image: diseasy1,
    bigImage: diseasy2,
    logo: kthLogo,
    year: 2022,
  },
];

export default projects;
