import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Navigation } from './components/Navigation';

import { LoginPage } from "./page/login/login";
import { Home } from "./page/home/home";
import { CadVendePage } from "./page/vendedor/cad_vende_page";
import { CadProdPage } from "./page/produto/cad_prod_page";
import { CadCliPage } from "./page/clientes/cad_cli_page";
import { ModProdPage } from "./page/produto/mod_prod_page";
import { ConVendePage } from "./page/vendedor/con_vende_page";
import { ConProdPage } from "./page/produto/con_prod_page";
import { ConCliPage } from "./page/clientes/con_cli_page";
import { ReaVendaPage } from "./page/venda/rea_venda_page";
import { ConVendaPage } from "./page/venda/con_venda_page";
import "./index.css";


const App = () => {
    return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LoginPage className="login"/>
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/cad_vend" >
            <CadVendePage/>
          </Route>

          <Route path="/cad_prod" >
            <CadProdPage/>
          </Route>

          <Route path="/cad_cli" >
            <CadCliPage/>
          </Route>

          <Route path="/mod_prod" >
            <ModProdPage/>
          </Route>

          <Route path="/con_vend" >
            <ConVendePage/>
          </Route>

          <Route path="/con_prod" >
            <ConProdPage/>
          </Route>
          
          <Route path="/con_cli" >
            <ConCliPage/>
          </Route>

          <Route path="/rea_venda" >
            <ReaVendaPage/>
          </Route>

          <Route path="/con_venda" >
            <ConVendaPage />
          </Route>

        </Switch>

    </BrowserRouter>
    );
}; 

render(<App />, document.getElementById("app"));