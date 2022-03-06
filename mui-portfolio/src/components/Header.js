import React from "react";
import "../CSS/header.css"
import ReactTypingEffect from "react-typing-effect";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container justifyContent="center">
          <Avatar
            src={avatar}
            alt="Yoshino"
            sx={{ width: 160, height: 160 }}
            className="avatar"
          />
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h5" className="name">
            <ReactTypingEffect
              text={["Yoshino Yayama"]}
              speed={100}
              cursorRenderer={(cursor) => (
                <h1 style={{ color: "white" }}>{cursor}</h1>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          // style={i % 2 === 0 ? { color: "magenta" } : {}}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography variant="h5" className="job1">
            <ReactTypingEffect
              text={["Frontend Developer"]}
              speed={100}
              cursorRenderer={(cursor) => (
                <h2 style={{ color: "white" }}>{cursor}</h2>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <h2 style={{ color: "white" }}>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          // style={i % 2 === 0 ? { color: "magenta" } : {}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h2>
                );
              }}
            />
          </Typography>
        </Grid>
        <Grid container justifyContent="center" className="grid-job2">
          <Typography variant="h5" className="job2">
            <ReactTypingEffect
              text={["React App Developer"]}
              speed={100}
              cursorRenderer={(cursor) => (
                <h2 style={{ color: "white" }}>{cursor}</h2>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <h2 style={{ color: "white" }}>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          // style={i % 2 === 0 ? { color: "magenta" } : {}}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h2>
                );
              }}
            />
          </Typography>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
