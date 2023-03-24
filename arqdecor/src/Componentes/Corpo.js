import React from 'react';
import '../CSS/Box.css';
import Logotipo from '../img/logotipo.jpg';
import Botao from './Botao';
import Rodape from './Footer';

function Corpo() {
    return (
        <div>
            <div className='box'>
                <div className='div_img'>
                    <img src={Logotipo}/>
                </div>
                <div className='div_texto'>
                    <h2>Escritório de Arquitetura e Urbanismo</h2>
                    <p>Construindo novos conceitos de arquitetura à decoração.</p>
                </div>
                <div className='alin_botoes'>
                    <Botao texto='Entre em contato' link='#'/>
                    <Botao texto='Carta de serviços' link='#'/>
                    <Botao texto='Briefing de ideias' link='#'/>
                </div>
                <div className='alin_footer'>
                    <Rodape/>
                </div>
            </div>
        </div>
    )
}

export default Corpo;