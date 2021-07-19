import * as Interfaces from '../../util/interfaces';
import { useState, useEffect } from "react";
import './MenuComponent.css';
import NavLinkComponent from '../NavLinkComponent/NavLinkComponent';

function MenuComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    const [menu, setMenu] = useState<Array<JSX.Element>>();

    useEffect(()=>{
        function generarMenu() {
            setMenu(props.menuLinks.map((link, index)=>
                <NavLinkComponent key={index} url={link.url} texto={link.texto} 
                />
            ));
        }

        generarMenu();
    },[props.menuLinks]);

    return(
        <ul className="menu">
            {menu}
        </ul>        
    );
}

export default MenuComponent;