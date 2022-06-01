import React from "react";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import resume from "../images/Yoshino-Resume.pdf";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#313c33",
    height: "89.6vh",
  },
  heading: {
    top: "27%",
    position: "absolute",
    color: "#c92649",
    textAlign: "center",
    textTransform: "uppercase",
    WebkitTextStroke: ".4px tan",
  },
  contacts: {
    color: "tan",
    textAlign: "center",
  },
  form: {
    top: "40%",
    position: "absolute",
    textAlign: "center",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.contactContainer}>
        <Grid container justifyContent="center">
          <Typography
            variant="h3"
            className={classes.heading}
            sx={{ mb: "1rem" }}
          >
            Contact Me
          </Typography>
          <Box component="div" className={classes.form}>
            <Typography
              variant="h5"
              className={classes.contacts}
              sx={{ mb: "1.5rem" }}
            >
              Call ---------
              <PhoneIcon sx={{ mb: "-7px", fontSize: 30 }} />
              --------{">"}
              {">"}
              <Box component="span" sx={{ color: "tomato", ml: "1rem" }}>
                +1 (778)-886-0534
              </Box>
            </Typography>
            <Typography
              variant="h5"
              className={classes.contacts}
              sx={{ mb: "1.5rem" }}
            >
              Email -------
              <EmailIcon sx={{ mb: "-7px", fontSize: 30 }} />
              -------{">"}
              {">"}
              <Link
                href="mailto:17j2079g@shinshu-u.ac.jp"
                underline="none"
                color="tomato"
                target="_blank"
              >
                {" "}
                <Box component="span" sx={{ color: "tomato", ml: "1rem" }}>
                  yayamayoshino@gmail.com
                </Box>
              </Link>
            </Typography>{" "}
            <Typography
              variant="h5"
              className={classes.contacts}
              sx={{ mb: "1.5rem" }}
            >
              LinkedIn ------
              <LinkedInIcon sx={{ mb: "-7px", fontSize: 30 }} />
              --------{">"}
              {">"}
              <Link
                href="https://www.linkedin.com/in/yoshino-yayama-a79365218/"
                underline="none"
                color="tomato"
                target="_blank"
              >
                <Box component="span" sx={{ color: "tomato", ml: "1rem" }}>
                  Yoshino Yayama
                </Box>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              className={classes.contacts}
              sx={{ mb: "1.5rem" }}
            >
              Github -------
              <GitHubIcon sx={{ mb: "-7px", fontSize: 30 }} />
              --------{">"}
              {">"}
              <Link
                href="https://github.com/yoshino9397"
                underline="none"
                color="tomato"
                target="_blank"
              >
                {" "}
                <Box component="span" sx={{ color: "tomato", ml: "1rem" }}>
                  yoshino9397
                </Box>
              </Link>
            </Typography>
            <Typography
              variant="h5"
              className={classes.contacts}
              sx={{ mb: "1.5rem" }}
            >
              <Link
                href={resume}
                underline="none"
                color="tomato"
                target="_blank"
              >
                {" "}
                <Box component="span" sx={{ color: "tomato", ml: "1rem" }}>
                  My Resume
                </Box>
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
export default Contact;
