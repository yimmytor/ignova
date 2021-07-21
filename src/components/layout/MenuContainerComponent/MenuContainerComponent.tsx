import * as Interfaces from '../../util/interfaces';
import './MenuContainerComponent.css';
import { IconClose } from '../../common/IconosSVGComponent/IconosSVGComponent';
import MenuComponent from '../MenuComponent/MenuComponent';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';
import { MouseEventHandler } from 'react';

function MenuContainerComponent(props: {clase: string, cambiarClaseMenu: MouseEventHandler, menuLinks: Array<Interfaces.Link>}) {
    return (
        <div className={'menu-container ' + props.clase}>            
            <ButtonComponent accion={props.cambiarClaseMenu} clase="boton boton-menu boton-menu-cerrar" texto="" icon={<IconClose />}/>
            <MenuComponent accion={props.cambiarClaseMenu} menuLinks={props.menuLinks} />            
        </div>
    );
}

export default MenuContainerComponent;