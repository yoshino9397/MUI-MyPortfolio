import React from "react";
import { makeStyles, styled } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
}));

const CssTextField = styled(TextField)({
  "& label": {
    color: "tan",
  },
  "& label.Mui-focused": {
    color: "tomato",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "tan",
    },
    "&:hover fieldset": {
      borderColor: "tan",
      borderWidth: "2px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "tan",
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            className={classes.heading}
            sx={{ mb: "1rem" }}
          >
            Contact Me
          </Typography>

          <CssTextField
            fullWidth={true}
            label="Name"
            variant="outlined"
            sx={{ input: { color: "white" } }}
          />
          <CssTextField
            fullWidth={true}
            label="E-mail"
            variant="outlined"
            sx={{ m: "1rem 0", input: { color: "white" } }}
          />
          <CssTextField
            fullWidth={true}
            label="Message"
            variant="outlined"
            sx={{ input: { color: "white" } }}
          />

          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}
            sx={{
              mt: "1rem",
              color: "tomato",
              borderColor: "tan",
              borderWidth: "1px",
              ":hover": {
                borderColor: "tomato",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
export default Contact;
