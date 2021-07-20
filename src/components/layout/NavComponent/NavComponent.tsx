import * as Interfaces from '../../util/interfaces';
import './NavComponent.css';
import { IconoMenu } from '../../common/IconosSVGComponent/IconosSVGComponent';
import MenuContainerComponent from '../MenuContainerComponent/MenuContainerComponent';
import BranchLogoComponent from '../../common/BranchLogoComponent/BranchLogoComponent';
import ButtonComponent from '../../common/ButtonComponent/ButtonComponent';

function NavComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    return(
        <nav>                   
            <BranchLogoComponent style={{height: '60%'}}/>
            <ButtonComponent clase="boton boton-menu" texto="" icon={<IconoMenu />}/>            
            <MenuContainerComponent menuLinks={props.menuLinks} />
        </nav>
    );
}

export default NavComponent;