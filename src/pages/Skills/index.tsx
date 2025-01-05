import molino from '../../assets/molino1.png'
import './style.css'

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className='h1-skills-container'>
          <h1>Sobre nosotros</h1>
        </div>
        <div className='contexto'>
          <img src={molino} className='molino' />
          <p>
            Mantenimiento, reparación y creación de piezas para molinos de trituración de plástico
            Me especializo en el mantenimiento, reparación y fabricación de piezas para molinos industriales destinados a la trituración de plástico. Con años de experiencia en la industria, ofrezco soluciones eficientes y de alta calidad para garantizar el óptimo funcionamiento de los equipos. Desde la fabricación de componentes personalizados hasta la reparación de partes desgastadas, mi enfoque está en proporcionar servicios que maximicen la productividad y prolonguen la vida útil de los molinos. Trabajo con materiales resistentes y tecnología avanzada para asegurar resultados duraderos y un rendimiento superior en el proceso de trituración.
          </p>
        </div>

      </div>
    </div >
  )
}

export { Skills };
