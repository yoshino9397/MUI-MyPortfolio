import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../CSS/Resume.css";

import { makeStyles } from "@material-ui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const theme = createTheme({
  typography: {
    fontFamily: ["Rajdhani", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
          sx={{ mt: "4rem", fontSize: "3.5rem" }}
        >
          My Experience
        </Typography>
      </ThemeProvider>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun,2021 - present"
          iconStyle={{ background: "#8a1c1c", color: "tan" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title">CICCC Student</h1>
          <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
          <p>
            I have been studying to become a web developer, about front-end
            languages, Java, PYTHON, etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - Mar,2021"
          icon={<WorkIcon />}
        >
          <h1 className="vertical-timeline-element-title">Internship</h1>
          <h4 className="vertical-timeline-element-subtitle">Nagano, Japan</h4>
          <p>
            While working as a front-end engineer as an internship, I attended
            company code study sessions and had employees taught me in a
            coworking space.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb,2020 - Apr,2020"
          icon={<VolunteerActivismIcon />}
          iconStyle={{
            background: "tomato",
            color: "#8a1c1c",
            boxShadow: "0 0 0 4px tan",
          }}
        >
          <h1 className="vertical-timeline-element-title">Volunteer</h1>
          <h4 className="vertical-timeline-element-subtitle">
            Ho Chi Minh, Vietnam
          </h4>
          <p>
            I mainly taught English to applicants free of charge with university
            students who are fluent in local English on the rooftops of cafes
            and facilities.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          iconStyle={{ background: "#8a1c1c", color: "tan" }}
          icon={<SchoolIcon />}
        >
          <h1 className="vertical-timeline-element-title">College Student</h1>
          <h4 className="vertical-timeline-element-subtitle">
            Shinshu University, Japan
          </h4>
          <p>
            {" "}
            I majored in the Faculty of Law, the Code of Criminal Procedure in
            Information Crime
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{
            background: "tan",
            color: "#8a1c1c",
            boxShadow: "0 0 0 4px #8a1c1c",
          }}
          icon={<BabyChangingStationIcon />}
        />
      </VerticalTimeline>
    </Box>
  );
};

export default Resume;
