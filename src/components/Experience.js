import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TypeWriter from "../Utils/TypeWritter";
import data from "../data/data.json";
import "./Experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(data.experienceDetails || []);
  }, []);

  return (
    <Box className="experience-container">
      <Typography variant="h3" className="section-title fade-in">
        Experience
      </Typography>

      <Box className="experience-grid">
        {/* LEFT CARD – EXPERIENCE */}
        {experience.map((exp, index) => (
          <Box key={index} className="experience-card fade-in">
            <Typography variant="h5" className="company-name">
              {exp.company}
            </Typography>

            <Typography variant="subtitle1" className="role-duration">
              {exp.role} • {exp.duration}
            </Typography>

            <ul className="responsibilities">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Box>
        ))}

        {/* RIGHT CARD – TYPEWRITER */}
        <Box className="impact-card fade-in">
          <Typography className="impact-text">
            <TypeWriter
              text="We make an impact that matters — to our people, clients, and society."
              speed={60}
              showCursor={true}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
