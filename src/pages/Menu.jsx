import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Menu Page</h1>
      <button onClick={() => navigate("/")}> GO HOME </button>
    </>
  );
};

export default Menu;
