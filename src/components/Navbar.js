import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import avatar from "../images/avatar.jpg";
import Footer from "../components/Footer";

const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentIndIcon />, listText: "Resume", listPath: "/resume" },
  { listIcon: <AppsIcon />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMailIcon />, listText: "Contact", listPath: "/contact" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4ba69",
    },
    secondary: {
      main: red[800],
    },
  },
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = () => (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          width: 250,
          background: "#e53935",
          height: "100%",
        }}
      >
        <Avatar
          src={avatar}
          alt="Yoshino"
          sx={{
            display: "block",
            margin: "2rem auto",
            width: 120,
            height: 120,
          }}
        />
        <Divider />
        <List
          sx={{
            marginTop: "2rem",
          }}
        >
          {menuItems.map((item, i) => (
            <ListItem
              button
              key={i}
              onClick={() => setOpen(false)}
              component={Link}
              to={item.listPath}
              sx={{
                color: "#ffe0b2",
                margin: "0 2rem",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#ffe0b2",
                }}
              >
                {item.listIcon}
              </ListItemIcon>
              <ListItemText primary={item.listText} />
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box component="nav">
          <AppBar
            position="absolute"
            color="primary"
            sx={{
              margin: 0,
            }}
          >
            <Toolbar>
              <IconButton onClick={() => setOpen(true)}>
                <KeyboardDoubleArrowLeftIcon color="secondary" />
              </IconButton>
              <Typography variant="h5" color="#8a1c1c">
                Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
          {sideList()}
          <Footer />
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
