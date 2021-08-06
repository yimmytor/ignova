import './ServiciosComponent.css';
import heroImg from '../../assets/img/hero/hero-servicios.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';

function ServiciosComponent() {
    return (
        <div className="container seccion-servicios">
            <SeccionHeroComponent imgUrl={heroImg} childElement={
                <HeroContentComponent clase="animate__animated animate__fadeInUp" titulo="Nuestros Servicios" texto="Aportamos Valor a su Negocio"/>
            }/>  
        </div>
    );
}

export default ServiciosComponent;