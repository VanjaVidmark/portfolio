import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Hålelr koll på vart på sidan vi är genom att auto-uppdatera hash

const ScrollDetector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith("/project-")) {
      return;
    }
    
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id != "project-details") {
            const sectionId = entry.target.id;
            navigate(`/#${sectionId}`, { replace: true });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [navigate]);

  return null;
};

export default ScrollDetector;
