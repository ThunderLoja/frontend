import React,{useEffect, useState} from "react";
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { useState } from "react";

import { cliente_get_all } from "../../actions/cliente" 
import { produto_get_available } from "../../actions/produto" 

import { user_information } from "../login/login"

export const ReaVendaPage = () => {
    const [itens, setItens] = useState([]);
    const [produto_escolhido, setProdutoEscolhido] = useState();
    const [clientes, setClientes] = useState([]); 
    const [produtos, setProdutos] = useState([]); 
    const [total, setTotal] = useState(0);
    const [descr, setDescr] = useState("");
    const [cliCPF, setCliCPF] = useState();
    
    useEffect(() => {
        (
            async () => {
                const produtos = await produto_get_available();
                setProdutos(produtos.data);
            }
        )();

        (
            async () => {
                const clientes = await cliente_get_all();
                setClientes(clientes.data);
            }
        )();

        setClientes(clientes);
        setProdutos(produtos);
        
        if (produtos.length > 0) {
            setProdutoEscolhido(produtos[0]);
        }

        if (clientes.length > 0) {
            setCliCPF(clientes[0].cpf);
        }
    }, []);




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
                        <select onChange = {(e) => {setCliCPF(e.target.value)}}>
                            {clientes.map((element) => {
                                return (
                                    <option value={element.cpf}>{element.nome} {element.cpf}</option>
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
                            let new_item = [...itens];
                            for (let j = 0; j < new_item.length; j++) {
                                if (new_item[j].id === produto_escolhido.id) {
                                    if (new_item[j].quantidade < new_item[j].estoque) {
                                        new_item[j].quantidade += 1;
                                        setTotal(total + new_item[j].preco);
                                    }
                                    console.log(new_item);
                                    setItens(new_item);
                                    return;
                                }
                            }
                            new_item = [...new_item, {...produto_escolhido, quantidade: 1}];
                            setTotal(total + produto_escolhido.preco);
                            console.log(new_item);
                            setItens(new_item);
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
                                    {itens.map((i) => (
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

                    </div>
                    <div>
                        <h3>Total: R$ {total.toFixed(2)}</h3>
                    </div>
                    
                    <div>
                        Descrição:
                        <input className="input_text" type="text" onChange={(e) => {setDescr(e.target.value)}}/>
                    </div>
                    
                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{
                            const current = new Date();
                            const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
                            
                            let new_sale_data = {
                                value: total,
                                date: date,
                                description: descr,
                                client_cpf: cliCPF,
                                seller_id: user_information,
                                itens: []
                            };
                            for (let i = 0; i < itens.length; i++) {
                                new_sale_data.itens.push({
                                    product_id: itens[i].id,
                                    quantity_sold: itens[i].quantidade,
                                });
                            }


                            console.log(new_sale_data);

                            // TODO: POST para backend

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
