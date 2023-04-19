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
                    <Botao texto='WhatsApp' link='https://encurtador.com.br/vBSZ3'/>
                    <Botao texto='Instagram' link='https://www.instagram.com/dearqadeco/'/>
                    <Botao texto='Carta de serviços' link='https://drive.google.com/file/d/1f0j3IjoTmwI3J4Cvn5zEO2GYafZwUteq/view?usp=share_link'/>
                </div>
                <div className='alin_footer'>
                    <Rodape/>
                </div>
            </div>
        </div>
    )
}

export default Corpo;