import './InicioComponent.css';
import { OndaHero } from '../../common/FormasSVGComponent/FormasSVGComponent';

function InicioComponent() {
    return (
        <div className="container inicio">
            <h1>Inicio</h1>        

            <OndaHero svgStyle={{width: '100%', overflow: 'hidden'}}
                      pathStyle={{stroke: 'none', fill: '#fff'}}
            />
        </div>
    );
}

export default InicioComponent;