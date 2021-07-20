import * as Interfaces from '../../util/interfaces';
import { useState, useEffect } from "react";
import './MenuComponent.css';
import MenuLinkComponent from '../MenuLinkComponent/MenuLinkComponent';

function MenuComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    const [menu, setMenu] = useState<Array<JSX.Element>>();

    useEffect(()=>{
        function generarMenu() {
            setMenu(props.menuLinks.map((link, index)=>
                <MenuLinkComponent key={index} url={link.url} texto={link.texto} />
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