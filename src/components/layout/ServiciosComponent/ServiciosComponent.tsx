import './ServiciosComponent.css';
import heroImg from '../../assets/img/hero/hero-inicio.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function ServiciosComponent() {
    return (
        <>
            <SeccionHeroComponent imgUrl={heroImg} />
        </>
    );
}

export default ServiciosComponent;