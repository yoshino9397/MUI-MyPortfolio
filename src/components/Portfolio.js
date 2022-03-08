import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import project1 from "../images/whereareyou";
import project2 from "../images/phantom";
import project3 from "../images/musician";
import project4 from "../images/muifolio";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const projects = [
  {
    name: "Horror Game Website",
    description: `Developed front-end user experience using HTML,SASS,Javascript and prepared some gimmicks so that users can experience the world view of the game from the site as well.Designed all the pictures on the site and drew them in Clip Studio.
    `,
    image: project1,
    url: "https://yoshino9397.github.io/whrereAreYou/HTML/top.html",
  },
  {
    name: "Mystery Game Website",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
    url: "https://yoshino9397.github.io/TrainProject/HTML/enter.html",
  },
  {
    name: "Musician website",
    description: `Developed with a focus on HTML, CSS, and Javascript, with easy-to-read and artist-like creative design in mind.Responsive design, changing the menu bar display on PC and smartphone, and creating website layout / user interface.
    `,
    image: project3,
    url: "https://yoshino9397.github.io/whrereAreYou/HTML/top.html",
  },
  {
    name: "MUI Portfolio",
    description: `I have developed a simple but dynamic React project, mainly using React and Material UI.Created Responsive User Experience with MUI Grids that allows the user to view any of my works which are organized.`,
    image: project4,
    url: "https://yoshino-mui-portfolio.netlify.app/",
  },
  {
    name: "React Project",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project5,
    url: "https://yoshino9397.github.io/whrereAreYou/HTML/top.html",
  },
  {
    name: "E-commerce",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project6,
    url: "https://yoshino9397.github.io/whrereAreYou/HTML/top.html",
  },
];

const useStyles = makeStyles({
  mainContainer: {
    background: "#313c33",
    height: "100%",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid
        container
        justifyContent="center"
        sx={{
          mt: "3rem",
        }}
      >
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card
              sx={{
                maxWidth: 345,
                m: "3rem auto",
                bgcolor: "#e2dac5",
              }}
            >
              <CardActionArea>
                <Link href={project.url}>
                  <CardMedia
                    component="img"
                    alt="Project"
                    height="140"
                    image={project.image}
                  />
                </Link>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    color: "#b71a3b",
                    fontWeight: "bold",
                    transition: ".2s",
                    ":hover": {
                      fontSize: "11px",
                    },
                  }}
                >
                  Share
                </Button>
                <Link href={project.url}>
                  <Button
                    size="small"
                    sx={{
                      color: "#b71a3b",
                      fontWeight: "bold",
                      transition: ".2s",
                      ":hover": {
                        fontSize: "11px",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
