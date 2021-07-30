function HeroContentComponent(props: {titulo: string, texto: string, buttons?: JSX.Element}) {
    return (
        <div className="hero-content">
            <h1>{props.titulo}</h1>
            {props.texto !== '' ? <p>{props.texto}</p> : null}
            {props.buttons}
        </div>
    );
}

export default HeroContentComponent;