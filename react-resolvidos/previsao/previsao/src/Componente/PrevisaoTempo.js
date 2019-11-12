import React from 'react';

export default function PrevisaoTempo(props) {
    return (
        <div className='previsao'>
            <h3 className='previsao__data'>{props.data}</h3>
            <p className='previsao__resumo'>{props.resumo}</p>
            <img className='previsao__img' src={props.imagem} />
            <p className='previsao-temperatura'>Máxima: <spam>{props.temperatura.max} °C</spam></p>
            <p className='previsao-temperatura'>Máxima: <spam>{props.temperatura.min} °C</spam></p>

        </div>
    )
}


// export default PrevisaoTempo;