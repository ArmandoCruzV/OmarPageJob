import molinoDesgaste from "../../assets/molinoDesgaste.jpeg";
import molinoMantenimiento from "../../assets/molinoMantenimiento.jpeg";
import './style.css'

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className='services-container'>
        <div className='circulo'></div>
        <div className='circulo2'></div>
        <h1 className='h1'>Servicios</h1>
        <ul className='servicios'>
          <li>Mantenimiento preventivo y correctivo de molinos para triturar plástico.</li>
          <li>Reparación de piezas y componentes de molinos, incluyendo rodamientos y ejes.</li>
          <li>Fabricación de piezas de repuesto personalizadas para molinos de plástico.</li>
          <li>Inspección y diagnóstico de fallas en equipos de trituración.</li>
          <li>Optimización de sistemas de molienda para mejorar la eficiencia.</li>
          <li>Instalación y ajuste de piezas nuevas en molinos para asegurar su rendimiento.</li>
          <li>Asesoría técnica y consultoría para el mantenimiento adecuado de los equipos.</li>
        </ul>
      </div>
      <div className="mantenimiento-ejem">
        <img src={molinoMantenimiento} className="molinoMantenimiento" />
        <img src={molinoDesgaste} className="molinoDesgaste" />
      </div>
    </ div>
  )
}

export { Services };

