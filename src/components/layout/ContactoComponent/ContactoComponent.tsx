import './ContactoComponent.css';
import heroImg from '../../assets/img/hero/hero-contacto.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';

function ContactoComponent() {
    return (
        <div className="container seccion-contacto">
            <SeccionHeroComponent imgUrl={heroImg} childElement={
                <HeroContentComponent clase="animate__animated animate__fadeInUp" titulo="Contacto" texto="Estaremos Encantados de Servirle"/>
            }/>                      
        </div>
    );
}

export default ContactoComponent;