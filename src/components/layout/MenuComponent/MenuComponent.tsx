import * as Interfaces from '../../models/interfaces';
import { MouseEventHandler } from "react";
import './MenuComponent.css';
import MenuLinkComponent from '../MenuLinkComponent/MenuLinkComponent';

function MenuComponent(props: {accion:MouseEventHandler, menuLinks: Array<Interfaces.ILink>}) {
    function generarMenu() {
        return props.menuLinks.map((link, index)=>
            <MenuLinkComponent accion={props.accion} key={index} url={link.url} texto={link.texto} />
        );
    }

    return (
        <ul className="menu">
            {generarMenu()}
        </ul>        
    );
}

export default MenuComponent;