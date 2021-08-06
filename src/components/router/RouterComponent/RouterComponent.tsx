import * as Interfaces from '../../models/interfaces';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundComponent from '../../layout/NotFoundComponent/NotFoundComponent';

function RouterComponent(props: {menuLinks: Array<Interfaces.ILink>}) {
    function generarRutas() {
        const rutas= props.menuLinks;
        const home = rutas.filter(ruta=>ruta.homePage)[0];

        return (
            <Switch>
                {rutas.map((ruta,index) => <Route key={index} exact path={ruta.url}>{ruta.componente}</Route>)}
                {home !== undefined ? <Route exact path="/"><Redirect to={home.url} /></Route> : null}          
                <Route path="*">
                    <NotFoundComponent />
                </Route>                        
            </Switch>
        );
    }

    return (
        <main>
            {generarRutas()}            
        </main> 
    );
}

export default RouterComponent;