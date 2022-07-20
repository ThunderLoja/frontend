import React from "react";
import {UserLogin} from "../actions/user_login";
import {venda_new} from "../actions/venda";
import {produto_new } from "../actions/produto";
import { Button } from "../component/button";

export const Home = () => {
  const button_test = () => {
    console.log("button_test");
    UserLogin("Haug","12345");
  };

  const button_test_2 = () => {
    produto_new("cafe");
  };

  return (
    <>
      <Button onClick={button_test}>Button</Button>
      <Button onClick={button_test_2}>Button</Button>
      <div>
          "hello world"    
      </div>
    </>
  );
};