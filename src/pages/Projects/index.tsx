import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
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
import { ScrollGSAP } from "../../Animation/index.tsx"
import "./style.css";

const Projects: React.FC = () => {

  ScrollGSAP(".projects")

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    <img src={a} className='img-projects' />,
    <img src={b} className='img-projects' />,
    <img src={c} className='img-projects' />,
    <img src={d} className='img-projects' />,
    <img src={e} className='img-projects' />,
    <img src={f} className='img-projects' />,
    <img src={g} className='img-projects' />,
    <img src={h} className='img-projects' />,
    <img src={i} className='img-projects' />,
    <img src={j} className='img-projects' />,
    <img src={k} className='img-projects' />,
    <img src={l} className='img-projects' />,
    <img src={m} className='img-projects' />,
    <img src={n} className='img-projects' />,
    <img src={o} className='img-projects' />,
    <img src={p} className='img-projects' />,
    <img src={q} className='img-projects' />,
    <img src={r} className='img-projects' />,
    <img src={s} className='img-projects' />,
  ];

  const totalSlides = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };


  return (
    <div id="proyectos" className="projects" >
      <div className="projects-container" >
        <div className="h1-projects-container">
          <h1 className="h1-projects">Proyectos</h1>
        </div>

        <div className="carousel-container">
          <div
            className="carousel"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((index) => (
              index
            ))}
          </div>

          {/* Botones de navegación */}
          <button className="nav-button prev" onClick={prevSlide}><FaArrowAltCircleLeft className='left' /></button>
          <button className="nav-button next" onClick={nextSlide}><FaArrowAltCircleRight className='right' /></button>
        </div>
      </div>
    </div>
  )
}

export { Projects };
