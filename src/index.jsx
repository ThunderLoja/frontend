import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Navigation } from './components/Navigation';

import { LoginPage } from "./page/login/login";
import { Home } from "./page/home/home";
import { CadVendPage } from "./page/vendedor/cad_vende_page";

import "./index.css";

const App = () => {
    return(
    <BrowserRouter>
        <Switch>
          <Route path="/login" >
            <LoginPage className="login"/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/cad_vend" >
            <CadVendPage/>
          </Route>

        </Switch>

    </BrowserRouter>
    );
}; 

render(<App />, document.getElementById("app"));