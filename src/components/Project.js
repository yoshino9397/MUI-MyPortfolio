import React from "react";
import Footer from "./Footer";
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


const projects = [
  {
    name: "Material-UI Portfolio",
    description: `I have developed a simple but dynamic React project, mainly using React and Material UI.Created Responsive User Experience with MUI Grids that allows the user to view any of my works which are organized.`,
    image: "https://live.staticflickr.com/65535/52005591590_91fa918598_k.jpg",
    url: "https://yoshino-mui-portfolio.netlify.app/",
    code: "https://github.com/yoshino9397/MUI-MyPortfolio",
  },
  {
    name: "Social Media App",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: "https://live.staticflickr.com/65535/52005056131_056d40957c_k.jpg",
    url: "https://yoshino-chatapp.herokuapp.com/",
    code: "https://github.com/yoshino9397/Realtime-ChatApp",
  },
  {
    name: "E-commerce App",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: "https://live.staticflickr.com/65535/52005120993_0969c57259_k.jpg",
    url: "https://deployretry.herokuapp.com/",
    code: "https://github.com/yoshino9397/Mern-EcommerceApp-Final",
  },
  {
    name: "Mystery Game Website",
    description: `Now Updating.....`,
    image: "https://live.staticflickr.com/65535/52005121363_b9636ad538_k.jpg",
    url: "https://yoshino-mysterygame.netlify.app/",
    code: "https://github.com/yoshino9397/MysteryGame-Page",
  },
  {
    name: "Travel-Map App",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: "https://live.staticflickr.com/65535/52005056001_cacd2bb2eb_k.jpg",
    url: "https://yoshino-travelmap.herokuapp.com/",
    code: "https://github.com/yoshino9397/Mern-TravelApp",
  },
  {
    name: "Weather App",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: "https://live.staticflickr.com/65535/52005584140_ab279e7c4e_k.jpg",
    url: "https://yoshino-react-weather-app.netlify.app/",
    code: "https://github.com/yoshino9397/React-weatherApp",
  },
  {
    name: "Horror Game Website",
    description: `Developed front-end user experience using HTML,SASS,Javascript and prepared some gimmicks so that users can experience the world view of the game from the site as well.Designed all the pictures on the site and drew them in Clip Studio.`,
    image: "https://live.staticflickr.com/65535/52005055841_ed8e5e2f56_k.jpg",
    url: "https://yoshino9397.github.io/whrereAreYou/HTML/top.html",
    code: "https://github.com/yoshino9397/whrereAreYou",
  },

  {
    name: "Musician website",
    description: `Developed with a focus on HTML, CSS, and Javascript, with easy-to-read and artist-like creative design in mind.Responsive design, changing the menu bar display on PC and smartphone, and creating website layout / user interface.
    `,
    image: "https://live.staticflickr.com/65535/52005584765_d990e1bde5_k.jpg",
    url: "https://yoshino9397.github.io/Ysinger/HTML/web.html",
    code: "https://github.com/yoshino9397/Ysinger",
  },
];

const useStyles = makeStyles({
  mainContainer: {
    background: "#313c33",
    height: "100%",
  },
});

const Project = () => {
  const classes = useStyles();
  return (
    <>
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
                  height: 375,
                  m: "3rem auto",
                  bgcolor: "#e2dac5",
                  boxShadow: "5px 10px 15px #1d261e",
                }}
              >
                <CardActionArea>
                  <Link href={project.url} target="_blank">
                    <CardMedia
                      component="img"
                      alt="Project"
                      height="140"
                      src={project.image}
                      sx={{
                        ":hover": {
                          transform: "scale(0.9)",
                        },
                      }}
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="#b71a3b"
                      gutterBottom
                      sx={{ textAlign: "center" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    href={project.code}
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button
                      size="small"
                      sx={{
                        color: "#cb401b",
                        fontWeight: "bold",
                        transition: ".2s",
                        ":hover": {
                          fontSize: "11px",
                        },
                      }}
                    >
                      Code
                    </Button>
                  </Link>

                  <Link
                    href={project.url}
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Button
                      size="small"
                      sx={{
                        color: "#cb401b",
                        fontWeight: "bold",
                        transition: ".2s",
                        ":hover": {
                          fontSize: "11px",
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Project;
