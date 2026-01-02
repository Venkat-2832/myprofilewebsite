import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import data from "../data/data.json";
import TypeWriter from "../Utils/TypeWritter";
import "./Profile.css";

const Profile = () => {
//   const userData = data;

  const [showRole, setShowRole] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

    const name = data.name;
    const role = data.personalDetails.find(item => item.role)?.role;
    const discription = data.personalDetails.find(item => item.discription)?.discription;

  return (
    <Box className="profile-container">
      {/* Name */}
      <Typography variant="h2" className="fade-in name">
        <TypeWriter
          text={`Hi, I'm ${name}`}
          speed={100}
          onComplete={() => setShowRole(true)}
        />
      </Typography>

      {/* Role */}
      {showRole && (
        <Typography variant="h4" className="fade-in delay-1">
          <TypeWriter
            text={`${role}`}
            speed={90}
            onComplete={() => setShowSummary(true)}
          />
        </Typography>
      )}

      {/* Summary */}
      {showSummary && (
        <Typography variant="body1" className="fade-in delay-2 summary">
          <TypeWriter
            text={`${discription}`}
            speed={20}
            showCursor={false}
          />
        </Typography>
      )}
    </Box>
  );
};

export default Profile;
