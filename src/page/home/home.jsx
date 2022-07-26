import React from "react";

import "./home.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

import Cookies from 'universal-cookie';


export const Home = () => (
    <Route render ={({history})=>(
    <div className="home_bg">
        <div className="header">
            <Link to="/home">
                    <h2 className="title">ThunderLoja</h2>
            </Link>
            <h1 className="title"></h1>
                
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
        <div className="content" style ={{backgroundImage: `url(${fundo})`}}>
            <div className="coluna_vendas">
                <button 
                class="bt_title" 
                style={{
                verticalAlign: "center",
                }}>
                    Vendas
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/rea_venda') 
                }}>
                    Realizar Venda
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/con_venda') 
                }}>
                    Relatório de Vendas
                </button>
            </div>
            <div className="coluna_vendedores">
            <button 
                class="bt_title" 
                style={{
                verticalAlign: "center"
                }}>
                    Vendedores
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/cad_vend') 
                }}>
                    Cadastrar Vendedor
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/con_vend') 
                }}>
                    Consultar Vendedores
                </button>

            </div>
            <div className="coluna_produtos">
            <button 
                class="bt_title" 
                style={{
                verticalAlign: "center",
                margin: "3px"
                }}>
                    Produtos
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center",
                margin: "3px"
                }} onClick={()=>{ 

                    history.push('/cad_prod') 
                }}>
                    Cadastrar Produto
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center",
                margin: "3px"
                }} onClick={()=>{ 

                    history.push('/con_prod') 
                }}>
                    Consultar Estoque
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center",
                margin: "3px"
                }} onClick={()=>{ 

                    history.push('/mod_prod') 
                }}>
                    Modificar Produto
                </button>
            </div>
            <div className="coluna_clientes">
            <button 
                class="bt_title" 
                style={{
                verticalAlign: "center"
                }}>
                    Clientes
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/cad_cli') 
                }}>
                    Cadastrar Clientes
                </button>

                <button 
                class="bt" 
                style={{
                verticalAlign: "center"
                }} onClick={()=>{ 

                    history.push('/con_cli') 
                }}>
                    Consultar Cliente
                </button>
            </div>
        </div>
        
        <div className="footer">

        </div>
    </div>
    )}/>
);
