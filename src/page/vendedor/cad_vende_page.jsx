import React from "react";

import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

export const CadVendPage = () => {
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
                    <div>
                        Nome:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        C.P.F.:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        Salário:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        Admissão:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        Cargo:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        Gerente:
                        <input
                            type="text"
                        />
                    </div>
                    <div>
                        Senha:
                        <input
                            type="text"
                        />
                    </div>
                    <button 
                        className="bt_cad_vend" 
                        style={{
                        width: 80,
                        height: 50,
                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            history.push('/') 
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
