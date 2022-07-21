import React from "react";
import "./login.css";
import logo from "../../data/logo.png"
import { Route } from 'react-router-dom'
import { user_put_login } from "../../actions/login"

export const LoginPage = () => {
  const authentication_request = async () => {
    const id = document.getElementById("id_login_page").value
    const key = document.getElementById("key_login_page").value
    const values = await user_put_login(parseInt(id), key).then((response) => {
      return response
    })
    console.log(typeof(parseInt(id)))
    console.log(key)
    console.log(values)
    return values == null ? false : true;

  }
  return (
    <div className="login_bg">
      <div className="left_side">
        <div className="title_container">
          <h1> ThunderLoja</h1>
        </div>
        <div className="img_container">
          <img src={logo} className="logo_img"/>
        </div>
      </div>
      <div className="right_side">
        <h2> Bem Vindo</h2>
          <div className="input_container">
            <h3>ID:</h3>
            <input id="id_login_page"
              type="int"
            />
          </div>
          <div className="input_container">
            <h3>Senha:</h3>
            <input id="key_login_page"
              type="password"
            />
          </div>
          <div className="input_container">

          <Route render ={({history})=>(    
          <button 
            class="bt1" 
            style={{
            width: 80,
            height:50,
            verticalAlign: "center"
            }} onClick={async ()=>{ 

                is_login_valid = await authentication_request()
                if(is_login_valid){
                  history.push('/') 
                } else {
                  // mensagem de erro
                }
                
                }
              }>
              Entrar
          </button>
          )
        
        } >

          </Route>
          
          </div>

      </div>
    </div>
)};
