import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import data from "../data/data.json";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Extract skills from data.json
    setSkills(data.Skills || []);
  }, []);

  return (
    <Box className="skills-container">
      <Typography variant="h3" className="skills-title fade-in">
        Skills
      </Typography>

      <Box className="skills-grid">
        {skills.map((skill, index) => (
          <Box key={index} className="skill-card fade-in delay" style={{ animationDelay: `${index * 0.2}s` }}>
            {/* {skill.image && (
              <img
                src={require(`../assets/${skill.image}`)}
                alt={skill.skillname}
                className="skill-image"
              />
            )} */}
            <Typography variant="h5" className="skill-name">
              {skill.skillname}
            </Typography>
            <Typography variant="body2" className="skill-description">
              {skill.discription}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
