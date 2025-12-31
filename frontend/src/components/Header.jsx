import React, { useContext, useState } from "react";
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

const menuItems = ["About", "Skills", "Projects", "Experience", "Resume"];

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme === "light" ? "#fff" : "#1e1e1e",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <Toolbar>
          {/* Left text */}
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Move Cursor
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map(item => (
                <Button key={item} color="inherit">
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
            padding: 2,
            backgroundColor: theme === "light" ? "#fff" : "#1e1e1e",
            height: "100%",
          }}
        >
          {menuItems.map(item => (
            <Button
              key={item}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 1 }}
              onClick={() => setOpen(false)}
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
