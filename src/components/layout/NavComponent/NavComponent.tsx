import * as Interfaces from '../../util/interfaces';
import { useState, useEffect } from "react";
import './NavComponent.css';
import NavLinkComponent from '../NavLinkComponent/NavLinkComponent';
import MenuComponent from '../MenuComponent/MenuComponet';

function NavComponent(props: {menuLinks: Array<Interfaces.Link>}) {
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
        <nav>
            <span>Outsourcing Administrativo - Contable</span>
            <MenuComponent menu={menu} />
        </nav>
    );
}

export default NavComponent;