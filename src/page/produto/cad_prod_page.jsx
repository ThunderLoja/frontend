import React from "react";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { produto_post_new } from "../../actions/produto"

export const CadProdPage = () => {
    const register_produto = () => {
        const name = document.getElementById("name_prod_cadastro").value
        const valor = document.getElementById("valor_prod_cadastro").value
        const desc = document.getElementById("desc_prod_cadastro").value
        const categoria = document.getElementById("categoria_prod_cadastro").value
        await produto_post_new(name, valor, desc, categoria)
    }

    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Cadastrar Produto</h1>
                 
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
                        <input className="name_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Valor:
                        <input className="valor_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Descrição:
                        <input className="desc_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Categoria:
                        <input className="categoria_prod_cadastro" type="text"/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            /*history.push('/')*/
                            register_produto() 
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
