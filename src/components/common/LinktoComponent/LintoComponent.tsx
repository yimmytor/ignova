import { Link } from 'react-router-dom';

function LinktoComponent(props: {texto: string, icon?: JSX.Element, clase: string, url: string, style?: object}) {
    return (
        <Link to={props.url} className={props.clase}>{props.icon}{props.texto}</Link>
    );
}

export default LinktoComponent;