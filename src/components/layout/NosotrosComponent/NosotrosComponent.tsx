import './NosotrosComponent.css';
import heroImg from '../../assets/img/hero/hero-nosotros.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';

function NosotrosComponent() {
    return (
        <div className="container seccion-nosotros">
            <SeccionHeroComponent imgUrl={heroImg} childElement={
                <HeroContentComponent clase="animate__animated animate__fadeInUp" titulo="Sobre Nosotros" texto="¿Quiénes Somos?"/>
            }/>                         
        </div>
    );
}

export default NosotrosComponent;