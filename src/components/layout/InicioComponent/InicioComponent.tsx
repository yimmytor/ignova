import './InicioComponent.css';
import heroImg from '../../assets/img/hero/hero-inicio.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';
import HeroContentComponent from '../../common/HeroContentComponent/HeroContentComponent';
import LinktoComponent from '../../common/LinktoComponent/LintoComponent';

function InicioComponent() {    
    return (        
        <div className="container seccion-inicio">
            <SeccionHeroComponent imgUrl={heroImg} childElement={
                <HeroContentComponent clase="animate__animated animate__fadeInUp" titulo="Haga Crecer su Negocio" texto="Trabajemos Juntos" buttons={
                    <div className="hero-button-box">                        
                        <LinktoComponent url="/contacto" clase="hero-button" texto="Saber Más" />                                                
                    </div>
                }/>
            }/>                         
        </div>
    );
}

export default InicioComponent;
