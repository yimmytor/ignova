import * as Interfaces from '../../util/interfaces';
import { useState, useEffect } from "react";
import NavLinkComponent from "../NavLinkComponent/NavLinkComponent";

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
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default NavComponent;