import { ISocialLink } from "../../models/interfaces";

import SocialLinkComponent from "../SocialLinkComponent/SocialLinkComponent";

function SocialContainerComponent(props: {socialLinks: Array<ISocialLink>}) {
    function generarLinks() {
        return (
            props.socialLinks.map((link,index) => <SocialLinkComponent key={index} link={link}/>)
        );
    }

    return (
        <div className="social-container">
            {generarLinks()}
        </div>
    );
}

export default SocialContainerComponent;