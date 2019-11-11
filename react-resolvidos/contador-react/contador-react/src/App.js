import React from 'react';
import logo from './logo.svg';
import './App.css';

const contador = 6
function verificaContador() {
   if (contador === 0) {
    return <p>'Contador não inciado'</p>
      } else {
    return <p>'Contador inciado'</p>
  }

}

function App() {
  return (
    <div className="App">
      <h2 className='titulo'>Contador:</h2>

      <p className='resultado'>{contador}</p>
      
      {verificaContador()}  

      <button className='btn adicionar'>+1</button>
      <button className='btn diminuir'>-1</button>
      <button className='btn resetar'>Reset</button>

    </div>
  );
} 

export default App;
