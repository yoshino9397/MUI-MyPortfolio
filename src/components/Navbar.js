import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// const pages = ["Resume", "Portfolio", "Contact"];
const pages = [
  { button: "Resume", path: "/resume" },
  { button: "Portfolio", path: "/portfolio" },
  { button: "Contact", path: "/contact" },
];
const menuItems = [
  { listIcon: <AssignmentIndIcon />, listText: "Resume", listPath: "/resume" },
  { listIcon: <AppsIcon />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMailIcon />, listText: "Contact", listPath: "/contact" },
];

const useStyles = makeStyles({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#b71a3b",
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#fac57d",
    },
  },
  typography: {
    fontFamily: ["Chakra Petch", "sans-serif"].join(","),
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="absolute"
        color="primary"
        sx={{
          margin: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              sx={{
                ml: 5,
                display: {
                  xs: "none",
                  md: "flex",
                  textDecoration: "none",
                },
              }}
              className="link"
              color="#b71a3b"
              component={Link}
              to="/"
            >
              My Portfolio
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Button
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#b71a3b" }}
              >
                <MenuBookIcon />
              </Button>
              <Menu
                className={classes.menu}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                <List
                  onClick={handleCloseNavMenu}
                  sx={{
                    background: "#b71a3b",
                  }}
                >
                  {menuItems.map((item, i) => (
                    <ListItem
                      button
                      key={i}
                      component={Link}
                      to={item.listPath}
                      sx={{
                        color: "#fac57d",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: "#fac57d",
                        }}
                      >
                        {item.listIcon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.listText}
                        sx={{ ml: "-18px" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Menu>
            </Box>
            <Typography
              variant="h4"
              noWrap
              className="link"
              color="#b71a3b"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                textDecoration: "none",
              }}
            >
              My Portfolio
            </Typography>
            <Box
              sx={{
                // ml: "50%",
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "right" },
              }}
            >
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{
                    m: "1px 15px",
                    color: "#b71a3b",
                    display: "flex",
                    fontSize: "26px",
                    textTransform: "none",
                    transition: ".3s",
                    ":hover": {
                      backgroundColor: "#b71a3b",
                      color: "#fac57d",
                    },
                  }}
                >
                  {page.button}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
