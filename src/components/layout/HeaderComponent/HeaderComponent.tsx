import * as Interfaces from '../../util/interfaces';
import './HeaderComponent.css';
import NavComponent from '../NavComponent/NavComponent';


function HeaderComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <header className="container-fluid">
            <NavComponent menuLinks={props.menuLinks} />
        </header>
    );
}

export default HeaderComponent;