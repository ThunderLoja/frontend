import React from "react";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

export const ModProdPage = () => {
    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/home">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Cadastrar Produto</h1>
                 
                <button 
                    class="bt_logout" 
                    style={{
                    verticalAlign: "center"
                    }} onClick={()=>{ 
    
                        history.push('/') 
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
                        ID:
                        <input className="input_text" type="text"/>
                    </div>

                    <div >
                        Nome:
                        <input className="input_text" type="text"/>
                    </div>
                    <div>
                        Valor:
                        <input className="input_text" type="text"/>
                    </div>
                    <div>
                        Descrição:
                        <input className="input_text" type="text"/>
                    </div>
                    <div>
                        Categoria:
                        <input className="input_text" type="text"/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            history.push('/home') 
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
