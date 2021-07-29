import './FooterComponent.css';
import { IconFacebook, IconInstagram } from "../../common/IconosSVGComponent/IconosSVGComponent";
import SocialContainerComponent from '../SocialContainerComponent/SocialContainerComponent';

function FooterComponent() {
    function getCurrentYear(): string {
        return new Date().getFullYear().toString();
    }

    return (
        <footer>                        
            <p className="copyright">&copy; {getCurrentYear()} Derechos Reservados</p>
            <SocialContainerComponent socialLinks={[                
                {url: 'http://www.facebook.com', icono: <IconFacebook /> , clase: 'social-link'},
                {url: 'http://www.instagram.com', icono: <IconInstagram />, clase: 'social-link'}
            ]}/>
        </footer>
    );
}

export default FooterComponent;