import * as Interfaces from '../../util/interfaces';
// import logo from '../../assets/img/logo.png';
import NavComponent from '../NavComponent/NavComponent';

function HeaderComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <header>
            {/* <img src={logo} alt="Logo de ignova"/> */}
            <span>Outsourcing Administrativo - Contable</span>
            <NavComponent menuLinks={props.menuLinks} />
        </header>
    );
}

export default HeaderComponent;