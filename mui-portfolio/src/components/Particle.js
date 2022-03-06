import React from "react";
import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  particlesCanvas: {
    position: "fixed",
  },
}));

const Particle = () => {
  const classes = useStyles();

  return (
    <Particles
      className={classes.particlesCanvas}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 200,
            limit: 300,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0,
              },
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image: "url('https://particles.js.org/images/background3.jpg')",
        },
      }}
    />
  );
};

export default Particle;
