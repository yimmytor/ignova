import './ContactoComponent.css';
import heroImg from '../../assets/img/hero/hero-contacto.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function ContactoComponent() {
    return (
        <div className="container seccion-contacto">
            <SeccionHeroComponent imgUrl={heroImg} />  
            <h1>Contacto</h1>                       
        </div>
    );
}

export default ContactoComponent;