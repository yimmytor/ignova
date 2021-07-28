import * as Interfaces from '../components/util/interfaces';
import { BrowserRouter as Router } from "react-router-dom";
import InicioComponent from '../components/layout/InicioComponent/InicioComponent';
import NosotrosComponent from '../components/layout/NosotrosComponent/NosotrosComponent';
import ServiciosComponent from '../components/layout/ServiciosComponent/ServiciosComponent';
import ContactoComponent from '../components/layout/ContactoComponent/ContactoComponent';
import HeaderComponent from '../components/layout/HeaderComponent/HeaderComponent';
import RouterComponent from '../components/router/RouterComponent/RouterComponent';
import FooterComponent from '../components/layout/FooterComponent/FooterComponent';

function App() {
  let menuLinks: Array<Interfaces.ILink> = [
    {url: '/inicio', texto: 'Inicio', homePage: true, componente: <InicioComponent />},
    {url: '/nosotros', texto: 'Nosotros', homePage: false, componente: <NosotrosComponent />},
    {url: '/servicios', texto: 'Servicios', homePage: false, componente: <ServiciosComponent />},
    {url: '/contacto', texto: 'Contacto', homePage: false, componente: <ContactoComponent />}      
  ];

  return (
    <>
      <Router>
        <HeaderComponent menuLinks={menuLinks} />
        <RouterComponent menuLinks={menuLinks} />          
      </Router>
      <FooterComponent />
    </>
  );
}

export default App;