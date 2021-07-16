import './MenuComponent.css';

function MenuComponent(props: {menu: Array<JSX.Element>}) {
    return(
        <div className="menuContainer">
            <ul className="menu">
                {props.menu}
            </ul>
        </div>
    );
}

export default MenuComponent;