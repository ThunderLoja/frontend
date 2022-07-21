import React from "react";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { produto_put_update } from "../../actions/produto"

export const ModProdPage = () => {
    const modify_produto = async () => {
        const id = document.getElementById("id_prod_mod").value
        const name = document.getElementById("name_prod_mod").value
        const valor = parseFloat(document.getElementById("valor_prod_mod").value)
        const desc = document.getElementById("desc_prod_mod").value
        const categoria = document.getElementById("categoria_prod_mod").value
        const quantidade = parseInt(document.getElementById("quantidade_prod_mod").value)
        await produto_put_update(id, name, valor, desc, categoria, quantidade)
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
                    
                    <div>
                        ID:
                        <input id="id_prod_mod" className="input_text" type="number"/>
                    </div>

                    <div >
                        Nome:
                        <input id="name_prod_mod" className="input_text" type="text"/>
                    </div>
                    <div>
                        Valor:
                        <input id="valor_prod_mod" className="input_text" type="number" step="0.1"/>
                    </div>
                    <div>
                        Descrição:
                        <input id="desc_prod_mod" className="input_text" type="text"/>
                    </div>
                    <div>
                        Categoria:
                        <input id="categoria_prod_mod" className="input_text" type="text"/>
                    </div>
                    <div>
                        Quantidade:
                        <input id="quantidade_prod_mod" className="input_text" type="number"/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            modify_produto();
                            history.push('/home');
                        }}>
                        Modificar
                    </button>
                </div>    
            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};
