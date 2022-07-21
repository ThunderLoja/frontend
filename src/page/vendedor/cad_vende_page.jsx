import React from "react";

import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

import { vendedor_post_new } from "../../actions/vendedor"

export const CadVendePage = () => {
    const register_vendedor = async () => {
        const name = document.getElementById("name_vendedor_cadastro").value
        const cpf = parseInt(document.getElementById("cpf_vendedor_cadastro").value)
        const salario = parseInt(document.getElementById("salario_vendedor_cadastro").value)
        const admissao = document.getElementById("admissao_vendedor_cadastro").value
        const eh_ativo = (document.getElementById("activo_vendedor_cadastro").value == "on")
        const id_maneger = parseInt(document.getElementById("maneger_id_vendedor_cadastro").value)
        const senha = document.getElementById("senha_vendedor_cadastro").value
        await vendedor_post_new(name, cpf, salario, admissao, eh_ativo, id_maneger, senha)
    }

    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Cadastrar Vendedor</h1>
                 
                <button 
                    class="bt_logout" 
                    style={{
                    verticalAlign: "center"
                    }} onClick={()=>{ 
    
                        history.push('/login') 
                    }}>
                        LOGOUT
                </button>
                
            </div>
            <div className="content_vend" style ={{backgroundImage: `url(${fundo})`}}>
                <div className="data_input_container">
                    
                    <h3>
                        Dados
                    </h3>
                    <div className="input_text">
                        <div> Nome: </div>
                        <input  id="name_vendedor_cadastro" type="text"/>
                    </div>
                    <div >
                        C.P.F.:
                        <input id="cpf_vendedor_cadastro" className="input_text" type="number"/>
                    </div>
                    <div>
                        Salário:
                        <input id="salario_vendedor_cadastro" className="input_text" type="number"/>
                    </div>
                    <div>
                        Admissão:
                        <input id="admissao_vendedor_cadastro" className="input_text" type="date"/>
                    </div>
                    <div>
                        Ativo?:
                        <input id="activo_vendedor_cadastro" className="input_text" type="checkbox"/>
                    </div>
                    <div>
                        Id Gerente:
                        <input id="maneger_id_vendedor_cadastro" className="input_text" type="number"/>
                    </div>
                    <div>
                        Senha:
                        <input id="senha_vendedor_cadastro" className="input_text" type="text"/>
                    </div>
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            // history.push('/')
                            register_vendedor()
                        }}>
                        Cadastrar
                    </button>
                </div>    
            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};
