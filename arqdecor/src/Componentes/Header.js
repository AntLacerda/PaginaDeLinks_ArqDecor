import React from 'react';
import Banner from '../img/plantas.jpg';
import '../CSS/Header.css';

function Header() {
    return (
        <header>
            <img src={Banner} className='banner'/>
        </header>
    )
}

export default Header;
