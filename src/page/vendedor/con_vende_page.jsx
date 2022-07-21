import React from "react";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import Table from "../../component/table";

export const ConVendePage = () => {

    // isso deve vir do back!!
    let vendedores = [
        {
            nome: "Vanderson",
            cpf: 123123123,
        },
        {
            nome: "Greg",
            cpf: 123123123,
        },
        {
            nome: "Lucas",
            cpf: 123123123,
        }

    ]


    
    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Consultar vendedores</h1>
                 
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
                <Table data={vendedores}/>

            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};
