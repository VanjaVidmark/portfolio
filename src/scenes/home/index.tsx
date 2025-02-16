import ProfileImage from "@/assets/profile_pic.png";
import {motion} from "framer-motion"
import { useEffect, useLayoutEffect, useState } from "react";

const Home = () => {
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      // defines when the left square sould be visible
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
    <section id="home" className="relative flex flex-col md:flex-row w-screen h-screen">
      {/* LEFT SIDE */}
      <div 
      className="w-full md:w-1/2 h-full mt-30 md:mt-0 mb-10 md:mb-0 bg-blue-900 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-orange-400 leading-tight text-left -translate-x-18">
          Vanja <br /> Vidmark
        </h1>

        {/* White Square */}
        <div className="bg-white mt-8 ml-18 pt-8 shadow-lg w-70 h-78 flex items-center justify-center">
          <img
            src={ProfileImage}
            alt="Vanja Vidmark"
            className="w-60 h-70 object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE big screen */}
      {windowWidth >= 768 ? (
        <motion.div
        initial={{ opacity: 1, x: "100%" }}
        animate={{ opacity: 1, x: isProjectsVisible? "200%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-1/2 h-screen bg-white z-50 flex flex-col justify-center p-24 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">MSc Computer Science</h2>
        <hr className="border-t-2 border-gray-300 w-32 my-6" />
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hello! I'm Vanja Vidmark, a Computer Science student at KTH, currently in my final semester. I'm passionate about software development and eager to learn and explore new technologies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          On this page, you'll find a collection of projects I've worked on — either for work, university, or as a fun side project.
        </p>
          
        </motion.div>
      ) : (
        <div className="relative top-0 left-0 w-full h-auto bg-white flex flex-col justify-center p-12 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">MSc Computer Science</h2>
        <hr className="border-t-2 border-gray-300 w-32 my-6" />
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Hello! I'm Vanja Vidmark, a Computer Science student at KTH, currently in my final semester. I'm passionate about software development and eager to learn and explore new technologies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          On this page, you'll find a collection of projects I've worked on — either for work, university, or as a fun side project.
        </p>
      </div>
      )
      }

    </section>
  );
};

export default Home;
