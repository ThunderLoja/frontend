import React,{useEffect, useState} from "react";
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
// import { Check, Close } from "@mui/icons-material";

import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'
import { vendedor_get_all } from "../../actions/vendedor"

export const ConVendePage = () => {

    const [vendedores, setVendedores] = useState([]); 

    useEffect( () => {

        ( async () => {
            let vendedores = await vendedor_get_all()
            console.log(vendedores.data)
            setVendedores(vendedores.data)
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
                <h1 className="title">Consultar vendedores</h1>
                 
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
                                    Nome
                                </TableCell>
                                <TableCell>
                                    CPF
                                </TableCell>
                                <TableCell>
                                    Salário
                                </TableCell>
                                <TableCell>
                                    Data de admissão
                                </TableCell>  
                                <TableCell>
                                    Ativo?
                                </TableCell>  
                                <TableCell>
                                    ID do Gerente
                                </TableCell>                            
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vendedores.map((i) => (
                                <TableRow key={i.id}>
                                    <TableCell>
                                        {i.id}
                                    </TableCell>
                                    <TableCell>
                                        {i.name}
                                    </TableCell>
                                    <TableCell>
                                        {i.cpf}
                                    </TableCell>
                                    <TableCell>
                                        {i.salary}
                                    </TableCell>
                                    <TableCell>
                                        {i.admission_date}
                                    </TableCell>
                                    <TableCell>
                                        {/* {i.is_active  ? <CheckIcon /> : <CloseIcon />} */}
                                        {i.is_active  ? 1 : 0}
                                    </TableCell>
                                    <TableCell>
                                        {i.manager_id}
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
