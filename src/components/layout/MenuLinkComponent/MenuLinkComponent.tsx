import { NavLink } from 'react-router-dom';
import './MenuLinkComponent.css'

function NavLinkComponent(props: {
                            url: string,
                            texto: string
                        }){
    return(
        <li><NavLink activeClassName="link-selected" to={props.url}>{props.texto}</NavLink></li>            
    );
}

export default NavLinkComponent;
