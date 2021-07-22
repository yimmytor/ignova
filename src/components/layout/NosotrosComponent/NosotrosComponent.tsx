import './NosotrosComponent.css';
import heroImg from '../../assets/img/hero/hero-nosotros.jpg';
import SeccionHeroComponent from '../../common/SeccionHeroComponent/SeccionHeroComponent';

function NosotrosComponent() {
    return (
        <>
            <SeccionHeroComponent imgUrl={heroImg} />
        </>
    );
}

export default NosotrosComponent;