import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { useCallback } from "react";
import { Engine } from "tsparticles-engine";

const ParticlesJs = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 1815.039575754227,
              rotateY: 868.0624057955,
            },
          },
        },
        //   interactivity: {
        //     detect_on: "canvas",
        //     events: {
        //       onhover: {
        //         enable: true,
        //         mode: "grab",
        //       },
        //       resize: true,
        //     },
        //     modes: {
        //       grab: {
        //         distance: 400,
        //         line_linked: {
        //           opacity: 1,
        //         },
        //       },
        //       bubble: {
        //         distance: 400,
        //         size: 40,
        //         duration: 2,
        //         opacity: 8,
        //         speed: 3,
        //       },
        //       repulse: {
        //         distance: 200,
        //         duration: 0.4,
        //       },
        //       push: {
        //         particles_nb: 4,
        //       },
        //       remove: {
        //         particles_nb: 2,
        //       },
        //     },
        //   },
        //   retina_detect: true,
      }}
    />
  );
};

export default ParticlesJs;
