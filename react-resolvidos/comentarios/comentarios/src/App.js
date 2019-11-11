import React from 'react';
import Comentario from './componentes/Comentario'
import logo from './logo.svg';
import elis from './img/elis.jpg'
import nara from './img/nara.jpg'
import rebeca from './img/rebeca.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <Comentario
        imagem={nara}
        nome='Nara Leão'
        subtitulo='Gata mimada'
        comentario='Gatinha muito carinhosa que não gosta das irmãs, mas muito boazinha, não briga, não faz bagunça. Come e dorme o dia todo.'
      />

<Comentario
        imagem={elis}
        nome='Elis Regina'
        subtitulo='Gata curiosa'
        comentario='A gatinha adulta mais brincalhona que existe. Inteligente e ágil, não pode ver uma fita, bolinha ou corda, tudo é brinquedo para ela'
      />

<Comentario
        imagem={rebeca}
        nome='Rebeca Scott'
        subtitulo='Gata filhote'
        comentario='A draga da mamãe, come tudo que vê pela frente. É brincalhona e boazinha. Seu sonho é que a Nara aceita sua amizade'
      />

    </div>
  );
}

export default App;
