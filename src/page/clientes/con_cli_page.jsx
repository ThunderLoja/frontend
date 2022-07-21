import React,{useEffect, useState} from "react";
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

import { cliente_get_all } from "../../actions/cliente"


export const ConCliPage = () => {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        (
            async () => {
                const clientes = await cliente_get_all()
                setClientes(clientes.data)
            }
        )()
    }, [])

    return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Consultar clientes</h1>

                <button
                    className="bt_logout"
                    style={{
                    verticalAlign: "center"
                    }} onClick={()=>{
                        history.push('/login')
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
                                        CPF
                                    </TableCell>
                                    <TableCell>
                                        Nome
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clientes.map((i) => (
                                    <TableRow key={i.cpf}>
                                        <TableCell>
                                            {i.cpf}
                                        </TableCell>
                                        <TableCell>
                                            {i.name}
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
