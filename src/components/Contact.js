import React from "react";
import { makeStyles, styled } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#313c33",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  contacts: {
    color: "tomato",
    textAlign: "center",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justifyContent="center">
        <Box component="div" className={classes.form}>
          <Typography
            variant="h4"
            className={classes.heading}
            sx={{ mb: "1rem" }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            Call --------
            <PhoneIcon sx={{ mb: "-7px", fontSize: 30 }} />
            ---------{">"}
            {">"}
          </Typography>
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            Email -------
            <EmailIcon sx={{ mb: "-7px", fontSize: 30 }} />
            ----------{">"}
            {">"}
          </Typography>{" "}
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            LinkedIn ----
            <LinkedInIcon sx={{ mb: "-7px", fontSize: 30 }} />
            -----------{">"}
            {">"}
          </Typography>
          <Typography
            variant="h5"
            className={classes.contacts}
            sx={{ mb: "1.5rem" }}
          >
            Github ------
            <GitHubIcon sx={{ mb: "-7px", fontSize: 30 }} />
            -----------{">"}
            {">"}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
export default Contact;
