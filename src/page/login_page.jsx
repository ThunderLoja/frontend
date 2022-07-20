import React from "react";
import {UserLogin} from "../actions/user_login";
import {venda_new} from "../actions/venda";
import {produto_new,produto_all } from "../actions/produto";
import { Button } from "../component/button";

export const Home = () => {
  const button_test = () => {
    console.log("button_test");
    UserLogin(1,"12345");
  };

  const button_test_2 = () => {
    produto_new("cafe");
  };

  const button_test_3 = () => {
    produto_all();
  };

  return (
    <>
      <Button onClick={button_test}>PUT</Button>
      <Button onClick={button_test_2}>POST</Button>
      <Button onClick={button_test_3}>GET</Button>
      <div>
          "hello world"    
      </div>
    </>
  );
};