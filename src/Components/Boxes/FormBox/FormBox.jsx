import React, { useState } from 'react';
import './FormBox.css';

var convidado = {
    nome: "",
    email: ""
}

function FormBox({title}) {
    const [values, setValues] = useState([]);
    const [aux, setAux] = useState(null)
    const [number, setNumber] = useState(0)
    const [error, setError] = useState([])
    const [mensagem, setMensagem] = useState([])

    function jsonContructor(ev) {
        var j = 0
        let invited = "["
        for (var i = 0; i < number; i++) {
            invited = `${invited}{"nome": "${ev.target[j].value}", "email": "${ev.target[j+1].value}"},`;
            j=j+2;
        }
        return invited.slice(0, -1) + ']';
    }

    function invitedSubmit(ev) {
        ev.preventDefault();
        if(aux) {
            const invited = jsonContructor(ev)
            
            console.log(invited);
            fetch(`http://127.0.0.1:5000/invited`, {
                "method": 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                "body": JSON.stringify(invited)
              })
              .then(res => 
                {
                    if (res.status === 201){
                        res.json().then( data => {
                            console.log("Criado")
                            setMensagem(data)
                            setError([])
                            setAux(null);
                        })
                    } else {
                        res.json().then(data => {
                            setError(data)
                            setMensagem([])
                        })
                    }
                }
              );
            
        }
    }
    
    function invitedState(ev) {
        ev.preventDefault();
        const n = ev.target[0].value
        var array = [];
        for (var i = 0; i < n; i++) {
            array.push(convidado);
        }
        setNumber(n);
        setValues(array);
        setAux(1);
    }

    return (
        <div className="box_form">
            <h1>{title}</h1>
            <p>Confirme aqui!</p>
            <div className="form-container">
                <form id="form-number-invited" className="formbox" onSubmit={invitedState}>
                    <input id="ipt-number-invited" type="number" placeholder="Numero de Convidados" name="convidados" min="1" max="6"/>
                    <button id="btn-number-invited" type="submit" className="btn">Incluir</button> 
                </form>
                { !aux ? null : 
                    (
                        <form id="container-all-invited" className="formbox" onSubmit={invitedSubmit}>
                        {values.map((conv, indice) => (
                            <div key={`div${indice}`} className="container-invited">
                                <h1 id="header-invited" key={`convidado${indice}`}>Convidado {indice + 1}</h1>
                                <input type="text" placeholder="Nome" name="nome" key={`nome${indice}`} />
                                <input type="text" placeholder="Email" name="email" key={`email${indice}`} />
                            </div>
                        ))}
                        <button 
                            type="submit"
                            className="btn"
                            disabled={!aux}
                        >
                            Confirmar Presença
                        </button> 
                    </form>
                    )
                }
                {
                    error.error? (
                    <div className="error-text">{error.error}</div>
                    ) : (null)
                }
                {
                    mensagem.mensagem? (
                    <div className="mensagem-text">{mensagem.mensagem}</div>
                    ) : (null)
                }
            </div>
        </div>
    );
}

export default FormBox;