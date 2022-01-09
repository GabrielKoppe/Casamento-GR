import React, { useState } from 'react';
import './FormBox.css';
import { BsArrowClockwise } from "react-icons/bs";

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
    const [but, setBut] = useState(null)

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
        setBut(1)
        if(aux) {
            const invited = jsonContructor(ev)
            
            console.log(invited);
            fetch(`${process.env.REACT_APP_API_URL}/invited`, {
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
                            setError(data);
                            setMensagem([]);
                            setBut(null);
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
        setBut(null);
        setNumber(n);
        setValues(array);
        setAux(1);
    }

    return (
        <div className="box_form">
            <h1>{title}</h1>
            <div className="form-container">
                <form id="form-number-invited" className="formbox" onSubmit={invitedState}>
                    <input id="ipt-number-invited" type="number" placeholder="Convidados a confirmar:" name="convidados" min="1" max="6"/>
                    <button id="btn-number-invited" type="submit" className="btn">Incluir</button> 
                </form>
                { !aux ? null : 
                    (
                        <form id="container-all-invited" className="formbox" onSubmit={invitedSubmit}>
                        {values.map((conv, indice) => (
                            <div key={`div${indice}`} className="container-invited">
                                <h1 id="header-invited" key={`convidado${indice}`}>Convidado {indice + 1}</h1>
                                <input type="text" placeholder="Nome" name="nome" key={`nome${indice}`} />
                                <input type="text" placeholder="E-mail" name="email" key={`email${indice}`} />
                            </div>
                        ))}
                        {!but ? (<button 
                            type="submit"
                            id="btn-number-invited"
                            className="btn"
                            disabled={!aux}
                        >
                            Confirmar Presença
                        </button>) : 
                        (<div> <BsArrowClockwise className="loading"/> </div>)}
                    </form>
                    )
                }
                {
                    error.error? (
                    <p className="error-text">{error.error}</p>
                    ) : (null)
                }
                {
                    mensagem.mensagem? (
                    <p className="mensagem-text">{mensagem.mensagem}</p>
                    ) : (null)
                }
            </div>
        </div>
    );
}

export default FormBox;