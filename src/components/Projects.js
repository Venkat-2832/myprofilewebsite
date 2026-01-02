import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import data from "../data/data.json";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projectDetails || []);
  }, []);

  return (
    <Box className="projects-container">
      <Typography variant="h3" className="projects-title fade-in" position="sticky">
        Projects
      </Typography>

      <Box className="projects-grid">
        {projects.map((project, index) => (
          <Box
            key={index}
            className="project-card fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
            m={3}
          >
            <Typography variant="h5" className="project-title">
              {project.title}
            </Typography>

            <Typography variant="body1" className="project-description">
              {project.description}
            </Typography>

            <Box className="tech-stack" mt={5}>
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-chip">
                  {tech}
                </span>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
