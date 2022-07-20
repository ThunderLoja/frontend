import React from "react";
import {UserLogin} from "../actions/user_login";
import {new_venda} from "../actions/venda";
import { Button } from "../component/button";

export const Home = () => {
  const button_test = () => {
    console.log("button_test");
    UserLogin("Haug","12345");
  };

  const button_test_2 = () => {
    console.log("button_test");
    new_venda("cafe",10,30,10);
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