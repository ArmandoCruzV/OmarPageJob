import fondo from "../../assets/fondo2.jpeg"
import omar from "../../assets/logo.jpeg"
import { ScrollGSAP } from "../../Animation/index"
import './style.css'

const About: React.FC = () => {

  ScrollGSAP(".h3-container")

  return (
    <div id="inicio" className='about' >
      <div className='about-container' >
        <img src={fondo} className="fondo" />
        <img src={fondo} className="fondo2" />

        <img src={omar} className="omar" />

        <div className="text-container">
          <div className='h1-container' >
            <h1>J.O.R</h1>
          </div>
          <div className='h3-container'>
            <h3>Mantenimiento, reparación, creación y venta de piezas para molinos.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
