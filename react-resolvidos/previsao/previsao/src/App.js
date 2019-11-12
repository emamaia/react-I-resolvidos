import React from 'react';
import PrevisaoTempo from './Componente/PrevisaoTempo'
import logo from './logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import nuvens from './img/nuvens.png'
import sol from './img/sol.png'
import './App.css';

function App() {
  return (
    <div className="App previsao-container">
     <PrevisaoTempo 

     data='12/11/2019'
     resumo ='ensolarado'
     imagem = {sol}
     temperatura ={{
       max: 31,
       min: 23

     }}

     />

<PrevisaoTempo 

data='13/11/2019'
resumo ='nublado'
imagem = {nuvens}
temperatura ={{
  max: 25,
  min: 16
}}

/>
    </div>
  );
}

export default App;
