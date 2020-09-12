import React from 'react';
import './nav.component.scss';

function NavBar(props) {
    return (
        <div className='navbar'>
            <button onClick={props.onClick}>About</button>
            <button onClick={props.onClick}>Projects</button>
            <button onClick={props.onClick}>Contact</button>
        </div>
    )
}

export default NavBar;