import fondo from "../../assets/fondo2.jpg"
import omar from "../../assets/cachitos.png"
import './style.css'

const About: React.FC = () => {

  return (
    <div className='about' >
      <div className='about-container' >
        <img src={fondo} className="fondo" />

        <img src={omar} className="omar" />

        <div className="text-container">
          <div className='h1-container' >
            <h1>OMAR  CACHITOS</h1>
          </div>
          <div className='h3-container'>
            <h3>Mantenimiento, reparación y creación de piezas para molinos</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
