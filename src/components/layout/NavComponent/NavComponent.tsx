import * as Interfaces from '../../util/interfaces';
import './NavComponent.css';
import { useState } from 'react';
import { IconoMenu } from '../../common/IconosSVGComponent/IconosSVGComponent';
import MenuContainerComponent from '../MenuContainerComponent/MenuContainerComponent';
import BranchLogoComponent from '../../common/BranchLogoComponent/BranchLogoComponent';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';

function NavComponent(props: {menuLinks: Array<Interfaces.ILink>}) {
    // const [claseMenu, setClaseMenu] = useState('menu-container menu-container-oculto');    
    const [claseMenu, setClaseMenu] = useState('menu-container menu-container-oculto');    


    // Así era como estaba antes
    // function cambiarClase() {
    //     if(claseMenu === 'menu-container menu-container-oculto') {
    //         setClaseMenu('menu-container menu-container-visible');       
    //     } else {
    //         setClaseMenu('menu-container menu-container-oculto');       
    //     }
    // }

    // Luego lo tuve que dividir en dos metodos para que funcara    
    function mostrarMenu() {
        setClaseMenu('menu-container menu-container-visible');       
    }

    function ocultarMenu() {
        setClaseMenu('menu-container ocultar-menu');
    }

    return (        
        <nav>                   
            <BranchLogoComponent style={{height: '60%'}}/>
            <ButtonComponent clase="boton boton-menu" accion={mostrarMenu} texto="" icon={<IconoMenu />}/>            
            <MenuContainerComponent clase={claseMenu} cambiarClaseMenu={ocultarMenu} menuLinks={props.menuLinks} />
        </nav>

        // Asi estaba antes
        // <nav>                   
        //     <BranchLogoComponent style={{height: '60%'}}/>
        //     <ButtonComponent clase="boton boton-menu" accion={cambiarClase} texto="" icon={<IconoMenu />}/>            
        //     <MenuContainerComponent clase={claseMenu} cambiarClaseMenu={cambiarClase} menuLinks={props.menuLinks} />
        // </nav>
    );
}

export default NavComponent;