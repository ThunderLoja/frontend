import React from "react";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import Table from "../../component/table";

export const ConProdPage = () => {

    // isso deve vir do back!!
    let Produtos = [
        {
            Nome: "Maçã",
            Preço: "R$1,95",
        },
        {
            Nome: "Carro bonito",
            Preço: "R$100000000,95",
        },
        {
            Nome: "outra Maçã",
            Preço: "R$1,95",
        }

    ]


    
    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Consultar Estoque</h1>
                 
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
            <div className="content_vend" style ={{backgroundImage: `url(${fundo})`, alignItems:"center", justifyContent:"center"}}>
                <Table data={Produtos}/>

            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};
