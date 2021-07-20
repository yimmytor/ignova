import * as Interfaces from '../../util/interfaces';
import './MenuContainerComponent.css';
import { IconCloseMenu } from '../../common/IconosSVGComponent/IconosSVGComponent';
import MenuComponent from '../MenuComponent/MenuComponet';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';

function MenuContainerComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <div className="menuContainer">
            <ButtonComponent clase="boton boton-menu" texto="" icon={<IconCloseMenu />}/>            
            <MenuComponent menuLinks={props.menuLinks} />
        </div>
    );
}

export default MenuContainerComponent;