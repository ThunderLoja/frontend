import React from "react";
import {user_put_login} from "../actions/login";
import {venda_post_new} from "../actions/venda";
import {produto_post_new,produto_get_all } from "../actions/produto";
import { Button } from "../component/button";

export const Home = () => {
  const button_test = () => {
    console.log("button_test");
    user_put_login(1,"senha1");
  };

  const button_test_2 = () => {
    produto_post_new(0, "string", 0, "string", "string", 0);
  };

  const button_test_3 = () => {
    produto_get_all();
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