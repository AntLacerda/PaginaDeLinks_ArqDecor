import React from 'react';
import '../CSS/Botao.css';

function Botao(props) {
    return (
        <div>
            <div className='botao'><a href=''>{props.texto}</a></div>
        </div>
    )
}

export default Botao;