import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import fondo from "../../assets/fondo.png";
import "./style.css";

const ContactMe: React.FC = () => {
  return (
    <div id="contacto" className="contact">
      <div className="contact-container">
        <div className="h1-contact--container">
          <h1 className="h1-contact">Contactame</h1>
        </div>
        <div className="information" >
          <p><strong>Teléfono:</strong> 59 1114 0456 <br /> 55 6479 3124</p>
          <p><strong>Correo Electrónico:</strong> mantenimiento.jore@gmail.com </p>
          <p><strong>Dirección:</strong> Estado. México · Municipio. Zumpango</p>
          <p><strong>Redes Sociales:</strong></p>
          <ul className="ul-contact">
            <li><a href="https://www.facebook.com/share/r/19qWw6nBG4/"><FaFacebookSquare className="facebook" /></a></li>
            <li><a href="https://twitter.com/tuempresa"><AiFillInstagram className="instagram" /></a></li>
            <li><a href="https://linkedin.com/in/tuempresa"><FaYoutube className="youtube" /></a></li>
          </ul>
          <p><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 5:00 PM</p>
        </div>
        <div className="fondo-container">
          <img src={fondo} className="fondo-contact" />
        </div>
      </div>
    </div>
  )
}

export { ContactMe };
