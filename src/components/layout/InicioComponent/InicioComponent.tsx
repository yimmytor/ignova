import './InicioComponent.css';
import heroImg from '../../assets/img/hero/hero-inicio.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function InicioComponent() {
    return (
        <div className="container inicio">
            <SeccionHeroComponent imgUrl={heroImg} />            
        </div>
    );
}

export default InicioComponent;