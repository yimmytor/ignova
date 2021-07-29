import './ServiciosComponent.css';
import heroImg from '../../assets/img/hero/hero-servicios.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function ServiciosComponent() {
    return (
        <div className="container seccion-servicios">
            <SeccionHeroComponent imgUrl={heroImg} />            
            <h1>Servicios</h1>             
        </div>
    );
}

export default ServiciosComponent;