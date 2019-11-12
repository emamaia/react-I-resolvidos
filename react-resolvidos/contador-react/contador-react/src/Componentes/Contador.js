import React from 'react';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            estado: true,
        };
    }

    abreContador = () => {
        this.setState((prevState) => {
            return {
                estado: !prevState.estado
            }
        })
    }

    adicionarUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        })
    }

    diminuirUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador - 1
            }
        })
    }

    resetar = () => {
        this.setState(() => {
            return {
                contador: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h2 className='titulo'>Contador:</h2>
                <p className='resultado'>{this.state.contador}</p>
                  <button className='btn' onClick={this.abreContador}>{this.state.estado=== true ? 'Abrir Contador': 'Fechar Contador'}</button>

                {this.state.estado === true ? "": (

                    <div>                       
                        <button className='btn adicionar' onClick={this.adicionarUm}>+1</button>
                        <button className='btn diminuir' onClick={this.diminuirUm}>-1</button>
                        <button className='btn resetar' onClick={this.resetar}>Reset</button>
                    </div>
                )}
            </div>
        )
    }
}
export default Contador;