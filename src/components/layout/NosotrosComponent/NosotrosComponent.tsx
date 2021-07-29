import './NosotrosComponent.css';
import heroImg from '../../assets/img/hero/hero-nosotros.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function NosotrosComponent() {
    return (
        <div className="container seccion-nosotros">
            <SeccionHeroComponent imgUrl={heroImg} />              
            <h1>Nosotros</h1>           
        </div>
    );
}

export default NosotrosComponent;