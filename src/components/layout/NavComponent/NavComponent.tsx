import * as Interfaces from '../../util/interfaces';
import './NavComponent.css';
import { useState } from 'react';
import { IconoMenu } from '../../common/IconosSVGComponent/IconosSVGComponent';
import MenuContainerComponent from '../MenuContainerComponent/MenuContainerComponent';
import BranchLogoComponent from '../../common/BranchLogoComponent/BranchLogoComponent';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';

function NavComponent(props: {menuLinks: Array<Interfaces.ILink>}) {
    const [claseMenu, setClaseMenu] = useState('menu-container menu-container-oculto');    

    function mostrarMenu() {
        setClaseMenu('menu-container menu-container-visible');       
    }

    function ocultarMenu() {
        setClaseMenu('menu-container ocultar-menu');
    }

    return (        
        <nav>                   
            <BranchLogoComponent style={{height: '60%'}}/>
            <ButtonComponent clase="boton-menu" accion={mostrarMenu} texto="" icon={<IconoMenu />}/>            
            <MenuContainerComponent clase={claseMenu} cambiarClaseMenu={ocultarMenu} menuLinks={props.menuLinks} />
        </nav>
    );
}

export default NavComponent;