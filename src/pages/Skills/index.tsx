import molino from '../../assets/molino1.png'
import { ScrollGSAP } from "../../Animation/index.tsx"
import './style.css'

const Skills: React.FC = () => {

  ScrollGSAP(".skills")

  return (
    <div id="sobre-nosotros" className="skills">
      <div className="skills-container">
        <div className='h1-skills-container'>
          <h1>Sobre nosotros</h1>
        </div>
        <div className='contexto'>
          <img src={molino} className='molino' />
          <p className='p-contexto'>
            Me especializo en el mantenimiento, reparación, fabricación y venta de piezas para molinos industriales destinados a la trituración de plástico. Con años de experiencia en la industria, ofrezco soluciones eficientes y de alta calidad para garantizar el óptimo funcionamiento de los equipos. Desde la fabricación de componentes personalizados hasta la reparación de partes desgastadas y la venta de piezas de repuesto, mi enfoque está en proporcionar servicios que maximicen la productividad y prolonguen la vida útil de los molinos. Trabajo con materiales resistentes y tecnología avanzada para asegurar resultados duraderos y un rendimiento superior en el proceso de trituración.
          </p>
        </div>
      </div>
    </div >
  )
}

export { Skills };
