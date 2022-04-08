import React from "react";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const theme = createTheme({});
const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          display: "flex",
          position: "absolute",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <BottomNavigation sx={{ bgcolor: "tan", width: "100%" }}>
          <Link href="https://github.com/yoshino9397" target="_blank">
            <BottomNavigationAction
              icon={<GitHubIcon />}
              sx={{
                color: "#7e0f12",
                ":hover": {
                  color: "tomato",
                },
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/yoshino-yayama-a79365218/" target="_blank">
            <BottomNavigationAction
              icon={<LinkedInIcon />}
              sx={{
                color: "#7e0f12",
                ":hover": {
                  color: "tomato",
                },
              }}
            />
          </Link>
          <Link href="https://www.instagram.com/yoshinoyayama/" target="_blank">
            <BottomNavigationAction
              icon={<InstagramIcon />}
              sx={{
                color: "#7e0f12",
                ":hover": {
                  color: "tomato",
                },
              }}
            />
          </Link>
        </BottomNavigation>
        <Typography
          variant="body2"
          color="#7e0f12"
          bgcolor="tan"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: "55px",
            pb: "10px"
          }}
        >
          ©️yoshinoyayama
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
