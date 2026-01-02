// SectionDivider.js
import React from "react";
import Box from "@mui/material/Box";

const SectionDivider = () => {
  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "800px",
        margin: "40px auto",
        height: "2px",
        borderRadius: "2px",
        background: "linear-gradient(to right, #0a58ff, #00b4ff)",
      }}
    />
  );
};

export default SectionDivider;
