import React,{useEffect, useState} from "react";
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { produto_get_all } from "../../actions/produto"

export const ConProdPage = () => {
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {

        ( async () => {
            let produtos = await produto_get_all()
            console.log(produtos.data)
            setProdutos(produtos.data)
            }
        )()

    }, []);

    
    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/home">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Consultar Estoque</h1>
                 
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
            <div className="content_vend" style ={{backgroundImage: `url(${fundo})`, alignItems:"center", justifyContent:"center"}}>
                <div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    ID
                                </TableCell>
                                <TableCell>
                                    Produto
                                </TableCell>
                                <TableCell>
                                    Preço Unitário
                                </TableCell>
                                <TableCell>
                                    Descrição
                                </TableCell>
                                <TableCell>
                                    Categoria
                                </TableCell>
                                <TableCell>
                                    Quantidade
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produtos.map((prod) => (
                                <TableRow key={prod.id}>
                                    <TableCell>
                                        {prod.id}
                                    </TableCell>
                                    <TableCell>
                                        {prod.name}
                                    </TableCell>
                                    <TableCell>
                                        R$ {prod.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        {prod.description}
                                    </TableCell>
                                    <TableCell>
                                        {prod.category}
                                    </TableCell>
                                    <TableCell>
                                        {prod.quantity}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>    
                </TableContainer>
                </div>
            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};
