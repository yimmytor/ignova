import { OndaHero } from '../FormasSVGComponent/FormasSVGComponent';

import './SeccionHeroComponent.css';

function SeccionHeroComponent(props: {imgUrl: string}) {
    return (
        

        <div style={{ backgroundImage: `url(${props.imgUrl})` }} className="hero-container container-fluid">
            <div className="hero-screen">
                <div className="hero-shapes">
                    <OndaHero pathStyle={[{fill: 'rgba(255,255,255,0.4)'},
                                          {fill: 'rgba(255,255,255)'}]}
                              svgStyle={{stroke: 'none', width: '100%'}}
                    />
                </div>
            </div>
        </div>
    );
}

export default SeccionHeroComponent;