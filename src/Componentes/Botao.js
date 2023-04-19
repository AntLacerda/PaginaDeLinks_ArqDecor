import React from 'react';
import '../CSS/Botao.css';

function Botao(props) {
    return (
        <div>
            <a href={props.link}><div className='botao'>{props.texto}</div></a>
        </div>
    )
}

export default Botao;