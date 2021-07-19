import * as Interfaces from '../../util/interfaces';
import './NavComponent.css';
import MenuContainerComponent from '../MenuContainerComponent/MenuContainerComponent';

function NavComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <nav>
            <span>Outsourcing Administrativo - Contable</span>
            <MenuContainerComponent menuLinks={props.menuLinks} />
        </nav>
    );
}

export default NavComponent;