import * as Interfaces from '../../util/interfaces';
import { useState,useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundComponent from '../../layout/NotFoundComponent/NotFoundComponent';

function RouterComponent(props: {menuLinks: Array<Interfaces.Link>}) {
    const [rutas, setRutas] = useState<JSX.Element>();

    function generarRutas() {
        const rutas= props.menuLinks;
        const home = rutas.filter(ruta=>ruta.homePage)[0];

        return(
            <Switch>
                {rutas.map((ruta,index)=><Route key={index} exact path={ruta.url}>{ruta.componente}</Route>)}
                {home !== undefined ? <Route exact path="/"><Redirect to={home.url} /></Route> : null}          
                <Route path="*">
                    <NotFoundComponent />
                </Route>                        
            </Switch>
        );
    }

    useEffect(() => {
        setRutas(generarRutas());
    }, [])

    return(
        <main>
            {rutas}            
        </main> 
    );
}

export default RouterComponent;