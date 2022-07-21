import React from "react";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { produto_post_new } from "../../actions/produto"

export const CadProdPage = () => {
    const register_produto = async () => {
        const name = document.getElementById("name_prod_cadastro").value
        const valor = parseInt(document.getElementById("valor_prod_cadastro").value)
        const desc = document.getElementById("desc_prod_cadastro").value
        const categoria = document.getElementById("categoria_prod_cadastro").value
        const quantidade = parseInt(document.getElementById("quantidade_prod_cadastro").value)
        await produto_post_new(name, valor, desc, categoria, quantidade)
    }

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
                        Nome:
                        <input id="name_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Valor:
                        <input id="valor_prod_cadastro" type="number"/>
                    </div>
                    <div>
                        Descrição:
                        <input id="desc_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Categoria:
                        <input id="categoria_prod_cadastro" type="text"/>
                    </div>
                    <div>
                        Quantidade:
                        <input id="quantidade_prod_cadastro" type="text"/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            register_produto(); 
                            history.push('/home');
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
