import { ISocialLink } from "../../models/interfaces";
import './SocialLinkComponent.css';

function SocialLinkComponent(props: {link: ISocialLink}) {
    return (
        <a href={props.link.url} target="_blank" rel="nooperner noreferrer" className={props.link.clase}>
            {props.link.icono}
        </a>
    );
}

export default SocialLinkComponent;