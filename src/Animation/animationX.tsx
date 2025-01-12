import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollGSAPX = (className: string, position: number,) => {
  useEffect(() => {
    gsap.fromTo(`${className}`,
      { opacity: 0, x: `${position}` },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: `${className}`,
          start: 'top 80%', // La animación empieza cuando el elemento esté en un 80% de la altura de la ventana
          end: 'top 30%',   // La animación termina cuando el elemento esté al 30%
          scrub: true,       // Hace que la animación se sincronice con el desplazamiento
        },
      }
    );
  }, []);
};

export { ScrollGSAPX };

