import React from "react";
import data from "../data/data.json";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";

const Contact = () => {
  const contact = data.contactDetails;

  return (
    <Box
      id="contact"
      sx={{
        padding: { xs: "60px 20px", md: "80px 100px" },
        backgroundColor: "#0f172a",
        color: "#fff",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={1}
      >
        Contact Me
      </Typography>

      <Typography
        textAlign="center"
        color="gray"
        mb={6}
      >
        Let’s connect and build something amazing together 🚀
      </Typography>

      {/* Contact Card */}
      <Card
        sx={{
          maxWidth: 500,
          margin: "auto",
          backgroundColor: "#020617",
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }}
      >
        <CardContent>
          <Stack spacing={4} alignItems="center">
            {/* Email */}
            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIcon sx={{ color: "#38bdf8", fontSize: 28 }} />
              <Typography>
                <a
                  href={`mailto:${contact[0].email}`}
                  style={{ color: "#e5e7eb", textDecoration: "none" }}
                >
                  {contact[0].email}
                </a>
              </Typography>
            </Stack>

            {/* LinkedIn */}
            <Stack direction="row" spacing={2} alignItems="center">
              <LinkedInIcon sx={{ color: "#0a66c2", fontSize: 28 }} />
              <Typography>
                <a
                  href={contact[1].linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e5e7eb", textDecoration: "none" }}
                >
                  LinkedIn Profile
                </a>
              </Typography>
            </Stack>

            {/* Resume Download */}
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={contact[2].resume}
              download
              sx={{
                background:
                  "linear-gradient(90deg, #38bdf8, #6366f1)",
                padding: "12px 24px",
                borderRadius: "30px",
                fontWeight: "bold",
                textTransform: "none",
                ":hover": {
                  background:
                    "linear-gradient(90deg, #6366f1, #38bdf8)",
                },
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
