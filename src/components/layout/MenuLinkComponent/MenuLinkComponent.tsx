import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLinkComponent.css'

function NavLinkComponent(props: {accion: MouseEventHandler, url: string,texto: string}){
    return (
        <li><NavLink onClick={props.accion} activeClassName="link-selected" to={props.url}>{props.texto}</NavLink></li>            
    );
}

export default NavLinkComponent;
