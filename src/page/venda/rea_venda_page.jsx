import React,{useEffect, useState} from "react";
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { useState } from "react";

export const ReaVendaPage = () => {
    const [item, setItem] = useState([]);
    const [produto_escolhido, setProdutoEscolhido] = useState();
    const [clientes, setClientes] = useState([]); 
    const [produtos, setProdutos] = useState([]); 

    useEffect(() => {
        // vai vir do back
        const produtos = [
            {
                id: 1,
                nome: "Maçã",
                preco: 1.95,
            },
            {
                id: 2,
                nome: "Carro bonito",
                preco: 100000000.95,
            },
            {
                id: 3,
                nome: "outra Maçã",
                preco: 1.95,
            }
    
        ];

                // vai vir do back
        const clientes = [
            {
                nome: "Vanderson",
                cpf: 12435645,
            },
            {
                nome: "Greg",
                cpf: 12435645,
            },
            {
                nome: "Lucas",
                cpf: 12435645,
            },

        ]

        setProdutoEscolhido(produtos[0]);
        setClientes(clientes);
        setProdutos(produtos);

    }, []);
    //const [item, setItem] = useState(1);






    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Registrar Venda</h1>
                 
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
                    
                    <div style={{flexDirection:"row"}}>
                        Cliente:
                        <select>
                            {clientes.map((element) => {
                                return (
                                    <option value={element.nome}>{element.nome}</option>        
                                )
                            })};
                        </select>
                    </div>
                    <div>
                        Produtos:
                        <select onChange={(e) => {
                            setProdutoEscolhido(produtos.find(p => p.id === parseInt(e.target.value)));
                           
                            console.log("produto escolhido:", produto_escolhido);
                            }}>
                            {produtos.map((element, index) => {                                
                                return (
                                    <option key={element.id} value={element.id} tabIndex={index} >{element.nome}</option>        
                                )
                            })}
                        </select>
                        <button 
                        className="bt_add_prod" 
                        style={{
                        
                        verticalAlign: "center"
                        }} onClick={()=>{
                            let new_item = [...item];
                            for (let j = 0; j < new_item.length; j++) {
                                if (new_item[j].id === produto_escolhido.id) {
                                    // new_item[j] = [...new_item[j], {...produto_escolhido, quantidade: 1}];
                                    new_item[j].quantidade += 1;
                                    console.log(new_item);
                                    setItem(new_item);
                                    return;
                                }
                            }
                            new_item = [...new_item, {...produto_escolhido, quantidade: 1}];
                            console.log(new_item);
                            setItem(new_item);
                            //lista_produtos_escolhidos.push(produto_escolhido);
                            //console.log(lista_produtos_escolhidos); 
                        }}>
                        Adicionar
                    </button>
                    </div>
                    <div>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Produto
                                        </TableCell>
                                        <TableCell>
                                            Preço Unitário
                                        </TableCell>
                                        <TableCell>
                                            Quantidade
                                        </TableCell>
                                        <TableCell>
                                            Total
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {item.map((i) => (
                                        <TableRow key={i.id}>
                                            <TableCell>
                                                {i.nome}
                                            </TableCell>
                                            <TableCell>
                                                R$ {i.preco.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                {i.quantidade}
                                            </TableCell>
                                            <TableCell>
                                                R$ {(i.preco * i.quantidade).toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>    
                        </TableContainer>
                        {/* <Table data={item}/> */}

                    </div>
                    <div>
                        Descrição:
                        <input className="input_text" type="text"/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

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
