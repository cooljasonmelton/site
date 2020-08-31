import React from 'react';
import './Menu.css';
import jasonPic from './jason-pic.svg'

const Menu = () => {

    return (
        <div className="Menu">
            <img className="menu-img" src={jasonPic} alt="jason" />
            <h1 className="menu-name">Jason Melton</h1>

        </div>
    );
}

export default Menu;
