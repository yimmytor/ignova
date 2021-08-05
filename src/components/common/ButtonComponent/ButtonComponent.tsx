import { MouseEventHandler } from 'react';

function ButtonComponent(props: {texto: string, icon?: JSX.Element, clase: string, accion?: MouseEventHandler}) {
    return (
        <button onClick={props.accion} className={props.clase}>{props.icon}{props.texto}</button>
    );
}

export default ButtonComponent;