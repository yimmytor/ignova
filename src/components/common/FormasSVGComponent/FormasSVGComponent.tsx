export function OndaHero(props: {svgStyle: object, pathStyle: Array<object>}) {
    return (
        <svg viewBox="0 0 375 70" style={props.svgStyle}>
            <path d="M190.239 32.2637C87.9781 9.02735 7.599e-06 43.6554 7.599e-06 43.6554L0 58.5H375V0C375 0 292.5 55.5 190.239 32.2637Z" style={props.pathStyle[0]}/>            
            <path d="M190.239 43.7637C87.9781 20.5274 7.599e-06 55.1554 7.599e-06 55.1554L0 70H375V11.5C375 11.5 292.5 67 190.239 43.7637Z" style={props.pathStyle[1]}/>            
        </svg>
    );
}






