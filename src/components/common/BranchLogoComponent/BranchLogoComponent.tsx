import logoIgnova from '../../assets/img/logos/ignova.png';

function BranchLogoComponent(props: {style: object}) {
    return(
        <img src={logoIgnova} style={props.style} alt="Logo de Ignova" />
    );
}

export default BranchLogoComponent;