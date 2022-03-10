import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#313c33",
    height: "100vh",
  },
  heading: {
    top: "30%",
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
    top: "43%",
    left: "31%",
    position: "absolute",
  },
  info: {
    top: "43%",
    left: "52%",
    position: "absolute",
    color: "tomato",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
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
          </Typography>
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            Email ---------
            <EmailIcon sx={{ mb: "-7px", fontSize: 30 }} />
            ----------{">"}
            {">"}
          </Typography>{" "}
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            LinkedIn ------
            <LinkedInIcon sx={{ mb: "-7px", fontSize: 30 }} />
            ----------{">"}
            {">"}
          </Typography>
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            Github -------
            <GitHubIcon sx={{ mb: "-7px", fontSize: 30 }} />
            ----------{">"}
            {">"}
          </Typography>
        </Box>
        <Box component="div" className={classes.info}>
          <Typography variant="h5" sx={{ mb: "1.5rem" }}>
            +1 (778)-886-0534
          </Typography>
          <Link
            href="mailto:17j2079g@shinshu-u.ac.jp"
            underline="none"
            color="tomato"
          >
            <Typography variant="h5" sx={{ mb: "1.5rem" }}>
              17j2079g@shinshu-u.ac.jp
            </Typography>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yoshino-yayama-a79365218/"
            underline="none"
            color="tomato"
          >
            <Typography variant="h5" sx={{ mb: "1.5rem" }}>
              Yoshino Yayama
            </Typography>
          </Link>
          <Link
            href="https://github.com/yoshino9397"
            underline="none"
            color="tomato"
          >
            <Typography variant="h5" sx={{ mb: "1.5rem" }}>
              yoshino9397
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};
export default Contact;
