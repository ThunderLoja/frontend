import React from "react";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

import { cliente_post_new } from "../../actions/cliente"

export const CadCliPage = () => {
    const register_cliente = () => {
        const name = document.getElementById("nome_cliente").value
        const cpf = document.getElementById("cpf_cliente").value
        await cliente_post_new(name, cpf)
    }
    
    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Cadastrar Cliente</h1>
                 
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
                   
                    <div >
                        Nome:
                        <input className="nome_cliente" type="text"/>
                    </div>
                    <div>
                        C.P.F.:
                        <input className="cpf_cliente" type="text"/>
                    </div>
                   
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            /*history.push('/') */
                            register_cliente()
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
