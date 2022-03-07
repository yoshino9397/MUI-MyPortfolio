import React from "react";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const theme = createTheme({});
const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation sx={{ bgcolor: "#313c33" }}>
        <Link href="https://github.com/yoshino9397">
          <BottomNavigationAction
            icon={<GitHubIcon />}
            sx={{
              color: "#fac57d",
              ":hover": {
                color: "tomato",
              },
            }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/yoshino-yayama-a79365218/">
          <BottomNavigationAction
            icon={<LinkedInIcon />}
            sx={{
              color: "#fac57d",
              ":hover": {
                color: "tomato",
              },
            }}
          />
        </Link>
        <Link href="https://www.instagram.com/yoshinoyayama/">
          <BottomNavigationAction
            icon={<InstagramIcon />}
            sx={{
              color: "#fac57d",
              ":hover": {
                color: "tomato",
              },
            }}
          />
        </Link>
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default Footer;
