import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../CSS/Resume.css";
import Footer from "./Footer";

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

import { GrMysql } from "react-icons/gr";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoNodejs,
  IoColorPalette,
} from "react-icons/io5";
import {
  SiReact,
  SiExpress,
  SiSocketdotio,
  SiTypescript,
  SiBootstrap,
  SiMaterialui,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

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
  { icon: <SiSocketdotio />, name: "Socket" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiMaterialui />, name: "Material UI" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "Mongodb" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <IoColorPalette />, name: "ClipStudio Paint" },
];

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <ThemeProvider theme={theme}>
          <Box component="div" className={classes.skillContainer}>
            <Typography
              variant="h4"
              align="center"
              className={classes.heading}
              sx={{
                mt: { xs: "3rem", sm: "4rem", md: "4rem" },
                fontSize: "3.5rem",
                color: "tan",
              }}
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
                  sx={{ m: "0 1.5rem" }}
                >
                  <Card
                    sx={{
                      maxWidth: 110,
                      maxHeight: 130,
                      m: "1rem auto",
                      p: "0 3px",
                      bgcolor: "#e2dac5",
                      boxShadow: "5px 10px 10px #4d0507",
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
            <h1 className="vertical-timeline-element-title">CICCC College</h1>
            <h4 className="vertical-timeline-element-subtitle">
              Vancouver, BC
            </h4>
            <p>
              Now I 'm a frontend developer with a wide range of academic
              backgrounds, a passion for user experience and interaction design,
              and strong creative and strategic thinking.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - Mar,2021"
            icon={<WorkIcon />}
          >
            <h1 className="vertical-timeline-element-title">Internship</h1>
            <h4 className="vertical-timeline-element-subtitle">
              Nagano, Japan
            </h4>
            <p>
              I mainly worked on website production, and I also did planning and
              management of coworking spaces, events, and programming schools.
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
              I mainly taught English to applicants free of charge with
              university students who are fluent in local English on the
              rooftops of cafes and facilities.
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
      <Footer />
    </>
  );
};

export default Resume;
