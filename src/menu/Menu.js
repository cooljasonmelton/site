import React from 'react';
import './Menu.css';

const Menu = () => {

    const menuItemNames = [
        "home",
        "projects",
        "contact",
        "blog"
    ]

    const renderMenuItems = () => {
        return menuItemNames.map(name=>{
            return(
            <li className="menu-item">{name}</li>
            )
        })
    }

    return (
        <div className="Menu cfb">
            <ul className="menu-item-container">
                {renderMenuItems()}
            </ul>   
        </div>
    );
}

export default Menu;
