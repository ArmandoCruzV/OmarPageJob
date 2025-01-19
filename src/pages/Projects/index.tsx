import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import a from "../../assets/1.jpeg";
import b from "../../assets/2.jpeg";
import c from "../../assets/3.jpeg";
import d from "../../assets/4.jpeg";
import e from "../../assets/5.jpeg";
import f from "../../assets/6.jpeg";
import g from "../../assets/7.jpeg";
import h from "../../assets/8.jpeg";
import i from "../../assets/9.jpeg";
import j from "../../assets/10.jpeg";
import k from "../../assets/11.jpeg";
import l from "../../assets/12.jpeg";
import m from "../../assets/13.jpeg";
import n from "../../assets/14.jpeg";
import o from "../../assets/15.jpeg";
import p from "../../assets/16.jpeg";
import q from "../../assets/17.jpeg";
import r from "../../assets/18.jpeg";
import s from "../../assets/19.jpeg";
//import { ScrollGSAP } from "../../Animation/index.tsx"
import { ScrollGSAPX } from "../../Animation/animationX.tsx"
import "./style.css";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [stateImage, setStateImage] = useState(currentIndex)

  ScrollGSAPX(".h1-projects-container", 50 - 100)
  ScrollGSAPX(".carousel-container", 50)

  const images = [
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s
  ];

  const totalSlides = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleImageClick = () => {
    setIsImageExpanded(true);
  };

  const handleClose = () => {
    setIsImageExpanded(false);
  };

  const stateImageExpanded = () => {
    setStateImage(currentIndex)
  }

  const manejarClick = () => {
    handleImageClick();
    stateImageExpanded();
  };

  let indexAdd = 0
  function includeImgAdd(): number {
    if (currentIndex >= 0 && currentIndex < 18) { indexAdd = currentIndex + 1 }
    else { indexAdd = 0 }
    return indexAdd;
  }
  includeImgAdd()

  let indexSubtract = 0
  function includeImgSubtract(): number {
    if (currentIndex >= 1 && currentIndex <= 18) { indexSubtract = currentIndex - 1 }
    else { indexSubtract = 18 }
    return indexSubtract;
  }
  includeImgSubtract()

  // Efecto para configurar el intervalo
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Cambia cada 1 segundo

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependencia en currentIndex para reiniciar el intervalo

  return (
    <div id="proyectos" className="projects" >
      <div className="projects-container" >
        <div className="h1-projects-container">
          <h1 className="h1-projects">Proyectos</h1>
        </div>

        <div className="carousel-container">

          {
            <div className="carousel" >
              <img src={`${images[indexSubtract]}`} className='img-projects--left' />
              <img
                src={`${images[currentIndex]}`}
                onClick={manejarClick}
                style={{ cursor: 'pointer' }}
                className="img-projects--center" />
              <img src={`${images[indexAdd]}`} className='img-projects--right' />
            </div>
          }

          <button className="nav-button prev" onClick={prevSlide}><FaArrowAltCircleLeft className='left' /></button>
          <button className="nav-button next" onClick={nextSlide}><FaArrowAltCircleRight className='right' /></button>

          {isImageExpanded && (
            <div className="overlay" onClick={handleClose}>
              <div className="expanded-image-container">
                <img src={`${images[stateImage]}`} className="expanded-image" />
                <button className="close-button" onClick={handleClose}><IoCloseCircleSharp /></button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export { Projects };
