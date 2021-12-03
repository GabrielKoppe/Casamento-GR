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

    function invitedSubmit(ev) {
        ev.preventDefault();
        if(aux) {
            var j = 0
            var array = values
            for (var i = 0; i < number; i++) {
                array[i].nome = ev.target[j].value;
                j++;
                array[i].email = ev.target[j].value;
                j++;
            }
            setAux(null);
        }
    }
    
    function invitedState(ev) {
        ev.preventDefault();
        setNumber(ev.target[0].value)
        var array = []
        for (var i = 0; i < number; i++) {
            array.push(convidado);
        }
        setValues(array)
        setAux(1);
    }

    return (
        <div className="box_form">
            <h1>{title}</h1>
            <div className="form_container">
                <form id="form-number-invited" className="formbox" onSubmit={invitedState}>
                    <input id="ipt-number-invited" type="number" placeholder="Numero de Convidados" name="convidados" min="1" max="6"/>
                    <button id="btn-number-invited" type="submit" className="btn">Incluir</button> 
                </form>
                { !aux ? null : 
                    (
                        <form className="formbox" onSubmit={invitedSubmit}>
                        {values.map((conv, indice) => (
                            <div key={`div${indice}`}>
                                <h3 key={`convidado${indice}`}>Convidado {indice + 1}</h3>
                                <input type="text" placeholder="Nome" name="nome" key={`nome${indice}`}/>
                                <input type="text"  placeholder="Email" name="email" key={`email${indice}`}/> 
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
            </div>
        </div>
    );
}

export default FormBox;