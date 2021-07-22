export function OndaHero(props: {svgStyle: object, pathStyle: object}) {
    return (
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={props.svgStyle}>
            <path d="M-56.15,87.33 C112.58,-29.11 223.19,221.53 523.42,48.84 L545.43,270.88 L-30.76,286.67 Z" style={props.pathStyle}></path>
        </svg>
    );
}