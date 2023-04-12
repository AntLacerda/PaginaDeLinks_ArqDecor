import React from 'react';
import Banner from '../img/plantas.jpg';
import '../CSS/Header.css';

function Header() {
    return (
        <div>
            <img src={Banner} className='banner'/>
        </div>
    )
}

export default Header;
