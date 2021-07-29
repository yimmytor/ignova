import './InicioComponent.css';
import heroImg from '../../assets/img/hero/hero-inicio.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function InicioComponent() {
    return (
        <div className="container seccion-inicio">
            <SeccionHeroComponent imgUrl={heroImg}/>   
            <h1>Inicio</h1>           
        </div>
    );
}

export default InicioComponent;