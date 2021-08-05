function HeroContentComponent(props: {titulo: string, texto: string, buttons?: JSX.Element, clase: string}) {
    return (
        <div className={"hero-content " + props.clase}>
            <h1 className="hero-title">{props.titulo}</h1>
            {props.texto !== '' ? <p className="hero-subtitle">{props.texto}</p> : null}
            {props.buttons} 
        </div>
    );
}

export default HeroContentComponent;