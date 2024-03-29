export const particles = {
    number: {
     value: 100,
     density: {
      enable: true,
      value_area: 800
     }
    },
    color: {
     value: "#fff"
    },
    shape: {
     type: "circle",
     stroke: {
      width: 0,
      color: "#000000"
     },
     polygon: {
      nb_sides: 5
     },
     image: {
      src: "img/github.svg",
      width: 100,
      height: 100
     }
    },
    opacity: {
     value: 1,
     random: true,
     anim: {
      enable: false,
      speed: 1,
      opacity_min: 0.1,
      sync: false
     }
    },
    size: {
     value: 2,
     random: true,
     anim: {
      enable: false,
      speed: 40,
      size_min: 0.1,
      sync: false
     }
    },
    line_linked: {
     enable: false,
     distance: 500,
     color: "#ffffff",
     opacity: 0.4,
     width: 2
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
      rotateY: 868.0624057955
     }
    }
   }