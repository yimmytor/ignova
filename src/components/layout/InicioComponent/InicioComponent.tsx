import './InicioComponent.css';
import heroImg from '../../assets/img/hero/hero-inicio.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';

function InicioComponent() {    
    function generarHeroContent(): JSX.Element {
        return (
            <HeroContentComponent titulo="Inicio" texto="Texto" />
        );
    }

    return (        
        <div className="container seccion-inicio">
            <SeccionHeroComponent imgUrl={heroImg} childElement={generarHeroContent()}/>
        </div>
    );
}

export default InicioComponent;
