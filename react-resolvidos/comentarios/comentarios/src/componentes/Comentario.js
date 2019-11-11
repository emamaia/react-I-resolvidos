import React from 'react';
function ComentarioDetalhes(props) {
  return (
    <div>
      <h2 className='comentario__nome'>{props.nome}</h2>
      <h3 className='comentario__subtitulo'>{props.subtitulo}</h3>
      <hr />

    </div>
  )
}

function ComentarioAutor(props) {
  return (     
      <p className='comentario__descricao'>{props.comentario}</p>    
  )
}


function Comentario(props) {
  return (
    <div className='comentario'>
      <div>
        <img className='comentario__perfil' src={props.imagem} />
      </div>

      <div>
      <ComentarioDetalhes
        nome={props.nome}
        subtitulo={props.subtitulo}
      />
    
      <ComentarioAutor
        comentario = {props.comentario}
      />

      </div>

    </div>
  )
}

export default Comentario;