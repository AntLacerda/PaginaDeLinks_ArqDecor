import React from 'react';
import '../CSS/Box.css';
import Logotipo from '../img/logotipo.jpg'

function Corpo() {
    return (
        <main>
            <div className='box'>
                <div className='div_img'>
                    <img src={Logotipo}/>
                </div>
                <div className='div_texto'>
                    <h2>Escritório de Arquitetura e Urbanismo</h2>
                    <p>Construindo novos conceitos de arquitetura à decoração.</p>
                </div>
            </div>
        </main>
    )
}

export default Corpo;