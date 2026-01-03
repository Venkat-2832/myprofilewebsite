import React, { useContext, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeContext } from "../context/ThemeContext";
// import data from "../data/data.json";

const menuItems = ["About", "Skills", "Projects", "Experience", "Contact"];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Move Cursor");

  // observe the Profile section (#about) and update title
  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitle("WELCOME");
          } else {
            setTitle("Venkat Sai");
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  // ✅ Smooth scroll on click
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
          color: theme === "light" ? "#000000" : "#ffffff",
        }}
      >
        <Toolbar>
          {/* Left Logo / Text */}
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 600 }} color="#0a58ff">
            {title}
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}

              <Button color="inherit" onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"}
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            p: 2,
            backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
            color: theme === "light" ? "#000000" : "#ffffff",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                mb: 1,
                color: "inherit",
              }}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setOpen(false);
              }}
            >
              {item}
            </Button>
          ))}

          <Button fullWidth onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
