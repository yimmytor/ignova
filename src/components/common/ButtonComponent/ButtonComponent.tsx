import './ButtonComponent.css';

function ButtonComponent(props: {texto: string, icon: JSX.Element, clase: string}) {
    return(
        <button className={props.clase}>{props.icon}{props.texto}</button>
    );
}

export default ButtonComponent;