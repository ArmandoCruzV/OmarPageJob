import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import fondo from "../../assets/fondo.png";
import { ScrollGSAP } from "../../Animation/index.tsx"
import { ScrollGSAPX } from "../../Animation/animationX.tsx"
import "./style.css";

const ContactMe: React.FC = () => {

  ScrollGSAP(".contact")
  ScrollGSAPX(".information", 50)
  ScrollGSAPX(".h1-contact--container", 50 - 100)

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
            <li><a href="https://www.facebook.com/share/r/19qWw6nBG4/" target="_blank"><FaFacebookSquare className="facebook" /></a></li>
            <li><a href=""><AiFillInstagram className="instagram" /></a></li>
            <li><a href=""><FaYoutube className="youtube" /></a></li>
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
