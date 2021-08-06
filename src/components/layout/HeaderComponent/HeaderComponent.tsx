import * as Interfaces from '../../models/interfaces';
import './HeaderComponent.css';
import NavComponent from '../NavComponent/NavComponent';


function HeaderComponent(props: {menuLinks: Array<Interfaces.ILink>}) {
    return (
        <header className="container-fluid">
            <NavComponent menuLinks={props.menuLinks} />
        </header>
    );
}

export default HeaderComponent;