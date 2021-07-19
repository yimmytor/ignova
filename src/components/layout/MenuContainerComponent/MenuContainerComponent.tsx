import * as Interfaces from '../../util/interfaces';
import './MenuContainerComponent.css';
import MenuComponent from '../MenuComponent/MenuComponet';

function MenuContainerComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <div className="menuContainer">
            <MenuComponent menuLinks={props.menuLinks} />
        </div>
    );
}

export default MenuContainerComponent;