import { Link } from "react-router";
import React from "react";
import "./styles.css";
import Button from "../../componets/button";  // Certifique-se de usar o caminho correto



export function About() {
  return (
    <>
      <h1 className="tittle">About</h1>
     
      <div className="container"> {/* Envolvendo o botão com a div container */}
        <Button />
      </div>

     
    </>
  );
}
