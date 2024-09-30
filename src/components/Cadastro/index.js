import React from "react";
import FormContato from "../Form";
import "./Cadastro.css"

const Cadastro = ({ addContact }) => {
  return (
    <div id="cadastro-container">
      <h2>Cadastrar Contato</h2>
      
      <FormContato 
        onSubmit={addContact} 
        buttonText="Cadastrar" 
      />
    </div>
  );
};

export default Cadastro;
