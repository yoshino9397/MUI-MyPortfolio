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
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoColorPalette } from "react-icons/io5";

const theme = createTheme({
  typography: {
    fontFamily: ["Rajdhani", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#313c33",
  },
  heading: {
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  skillContainer: {
    background: "#7e0f12",
    paddingBottom: "3rem",
  },
}));

const skills = [
  { icon: <IoLogoHtml5 />, name: "HTML" },
  { icon: <IoLogoCss3 />, name: "CSS" },
  { icon: <IoLogoSass />, name: "SASS" },
  { icon: <IoLogoJavascript />, name: "JS" },
  { icon: <SiReact />, name: "React" },
  { icon: <IoLogoNodejs />, name: "Node" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiMaterialui />, name: "MUI" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "Mongodb" },
  { icon: <IoColorPalette />, name: "ClipStudio Paint" },
];

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <ThemeProvider theme={theme}>
        <Box component="div" className={classes.skillContainer}>
          <Typography
            variant="h4"
            align="center"
            className={classes.heading}
            sx={{ mt: "4rem", fontSize: "3.5rem", color: "tan" }}
          >
            My Skills
          </Typography>
          <Grid container justifyContent="center">
            {skills.map((skill, i) => (
              <Grid
                item
                xs={8}
                sm={3}
                md={2}
                lg={1}
                key={i}
                sx={{ m: "0 2rem" }}
              >
                <Card
                  sx={{
                    maxWidth: 110,
                    maxHeight: 140,
                    m: "1rem auto",
                    bgcolor: "#e2dac5",
                  }}
                >
                  <CardContent>
                    <IconButton
                      size="large"
                      sx={{
                        bottom: "5px",
                        left: "13px",
                        color: "#313c33",
                      }}
                    >
                      {skill.icon}
                    </IconButton>
                    <Typography
                      variant="h6"
                      color="#b71a3b"
                      sx={{
                        m: "0 auto",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
          sx={{ mt: "4rem", fontSize: "3.5rem", color: "#d02a2a" }}
        >
          My Experience
        </Typography>
      </ThemeProvider>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun,2021 - present"
          iconStyle={{ background: "#7e0f12", color: "tan" }}
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
            color: "#7e0f12",
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
          iconStyle={{ background: "#7e0f12", color: "tan" }}
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
            color: "#7e0f12",
            boxShadow: "0 0 0 4px #7e0f12",
          }}
          icon={<BabyChangingStationIcon />}
        />
      </VerticalTimeline>
    </Box>
  );
};

export default Resume;
