import React from "react";
import Select from 'react-select'


// import "./vend.css"
import fundo from "../../data/fundo.png"
import { Route, Link } from 'react-router-dom'

export const ReaVendaPage = () => {

    // vai vir do back
    const options = []
      


    return (
      <select value={options}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    )
};
