import {motion} from "framer-motion"
import { useEffect, useState } from "react";
import projects from "../projects/ProjectsData";

type Props = {
    setSelectedPage: (value: string) => void;
};

const Contact = ({setSelectedPage}: Props) => {
  const [isLastProjectGone, setIsLastProjectGone] = useState(false);

  const lastProjectId = `project-${projects.length}`;

  useEffect(() => {
    const handleScroll = () => {
      const lastProjectSection = document.getElementById(lastProjectId);
      if (lastProjectSection) {
        const rect = lastProjectSection.getBoundingClientRect();
        setIsLastProjectGone(rect.bottom <= 0.4*window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastProjectId]);
  

  return (
    <section id="contact" className="relative flex w-screen h-screen">
      {/* LEFT SIDE */}
      <motion.div 
      className="w-1/2 h-full bg-blue-900 flex flex-col items-center justify-center p-12 relative"
      onViewportEnter={()=> setSelectedPage("contact")}
      >
        <h1 className="text-5xl font-bold text-orange-500 leading-tight text-center">
          Contact <br /> me!
        </h1>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 1, x: isLastProjectGone? 0 : "100%"}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-1/2 h-screen bg-white z-40 flex flex-col justify-center p-12 shadow-lg"
      >
        <p className="mt-4 text-lg text-gray-600">
          Links yao
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
