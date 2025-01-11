import molinoDesgaste from "../../assets/molinoDesgaste.jpeg";
import molinoMantenimiento from "../../assets/molinoMantenimiento.jpeg";
import { ScrollGSAP } from "../../Animation/index.tsx"
import './style.css'

const Services: React.FC = () => {

  ScrollGSAP(".services")

  return (
    <div id="servicios" className="services">
      <div className='services-container'>
        <div className='circulo'></div>
        <div className='circulo2'></div>
        <div className='h1-services'>
          <h1 className='h1'>Servicios</h1>
        </div>
        <ul className='servicios'>
          <li>Contamos con un servicio especializado en la reparación de fresas, taladros y cuchillas de alta precisión.</li>
          <li>Afilado de cuchillas: Ofrecemos afilado de cuchillas para asegurar su eficiencia y durabilidad, ya sea en nuestro taller o con servicio a domicilio.</li>
          <li>Venta de cuchillas: Proveemos cuchillas de calidad para todo tipo de aplicaciones industriales.</li>
          <li>Tolvas para molinos: Fabricación y venta de tolvas personalizadas para molinos.</li>
          <li>Cubre bandas y cribas: Proporcionamos cubre bandas y cribas de alta resistencia para optimizar el funcionamiento de su maquinaria.</li>
          <li>Mantenimiento preventivo y correctivo de molinos para triturar plástico.</li>
          <li>Reparación de piezas y componentes de molinos, incluyendo rodamientos y ejes.</li>
          <li>Fabricación de piezas de repuesto personalizadas para molinos de plástico.</li>
          <li>Inspección y diagnóstico de fallas en equipos de trituración.</li>
          <li>Optimización de sistemas de molienda para mejorar la eficiencia.</li>
          <li>Instalación y ajuste de piezas nuevas en molinos para asegurar su rendimiento.</li>
          <li>Asesoría técnica y consultoría para el mantenimiento adecuado de los equipos.</li>
        </ul>
      </div>
      <div className="domicilio" >
        <h3 className="h3-domicilio" >Servicio a domicilio y en taller: Ofrecemos atención tanto en nuestro taller especializado como en el lugar de trabajo de nuestros clientes.</h3>
      </div>
      <div className="mantenimiento-ejem">
        <img src={molinoMantenimiento} className="molinoMantenimiento" />
        <img src={molinoDesgaste} className="molinoDesgaste" />
      </div>
    </ div>
  )
}

export { Services };

