import React, {useState} from "react"
import { Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

// import "./venda.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

import { venda_get_report } from "../../actions/venda" 


export const ConVendaPage = () => {
    const [data_inicial, setDataInicial] = useState(null);
    const [data_final, setDataFinal] = useState(null);
    const [relatorio, setRelatorio] = useState([]);

return (
    <Route render ={({history})=>(
        <div className="home_bg">
            <div className="header">
                <Link to="/">
                    <h2 className="title">ThunderLoja</h2>
                </Link>
                <h1 className="title">Relatorio de vendas</h1>
                 
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
      
                    
                    <div>
                        Data inicial:
                        <input id="data_inicio" className="input_text" type="date" onChange={(e) => {setDataInicial(e.target.value);}}/>
                        Data final:
                        <input id="data_fim" className="input_text" type="date"  onChange={(e) => {setDataFinal(e.target.value);}}/>
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
                                            Quantidade Disponível
                                        </TableCell>
                                        <TableCell>
                                            Quantidade Vendida
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {relatorio.map((prod) => (
                                        <TableRow key={prod.id}>
                                            <TableCell>
                                                {prod.name}
                                            </TableCell>
                                            <TableCell>
                                                R$ {prod.price.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                                {prod.quantity_available}
                                            </TableCell>
                                            <TableCell>
                                                {prod.quantity_sold}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>    
                        </TableContainer>

                    </div>


                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            (
                                async () => {
                                    const relatorio_back = await venda_get_report(data_inicial, data_final);
                                    setRelatorio(relatorio_back.data)
                                }
                            )()
                        }}>
                        Consultar
                    </button>

                    <button 
                        className="bt_cad_vend" 
                        style={{

                        verticalAlign: "center"
                        }} onClick={()=>{ 
                            setRelatorio([]);
                            setDataInicial(null);
                            setDataFinal(null);

                            document.getElementById('data_inicio').value = '';
                            document.getElementById('data_fim').value = ''; 
                        }}>
                        Limpar
                    </button>
                </div>    
            </div>
            
            <div className="footer">
    
            </div>
        </div>
        )}/>
    )
};