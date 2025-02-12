import ProfileImage from "@/assets/profile_pic.png";
import {motion} from "framer-motion"
import { useEffect, useState } from "react";

type Props = {
    setSelectedPage: (value: string) => void;
};

const Home = ({setSelectedPage}: Props) => {
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            const rect = projectsSection.getBoundingClientRect();
            setIsProjectsVisible(rect.top <= window.innerHeight * 0.5);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <section id="home" className="relative flex w-screen h-screen">
      {/* LEFT SIDE */}
      <motion.div 
      className="w-1/2 h-full bg-blue-900 flex flex-col items-center justify-center p-12 relative"
      onViewportEnter={()=> setSelectedPage("home")}
      >
        <h1 className="text-5xl font-bold text-orange-500 leading-tight text-center">
          Vanja <br /> Vidmark
        </h1>

        {/* White Square */}
        <div className="bg-white p-4 shadow-lg mt-6">
          <img
            src={ProfileImage}
            alt="Vanja Vidmark"
            className="w-60 h-70 object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: isProjectsVisible? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-1/2 h-screen bg-white z-40 flex flex-col justify-center p-12 shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Software Developer
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          I developed a Planning Poker feature on one of Scania's internal websites.
        </p>
        <p className="mt-4 text-lg">
          The app was generated with <span className="font-bold">JHipster</span> and used{" "}
          <span className="font-bold">Angular</span> as front-end, and{" "}
          <span className="font-bold">Java (Spring Boot)</span> as back-end.{" "}
          <span className="font-bold">MySQL</span> was used as the database.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
