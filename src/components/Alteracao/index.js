import React from "react";
import FormContato from "../Form"
import './Alteracao.css'

const Alteracao = ({ contact, updateContact }) => {
   return (
      <div>
         <h2>Alterar Contato</h2>
         
         <FormContato
            contact={contact}
            onSubmit={updateContact}
            buttonText="Atualizar"
         />
      </div>
   );
};

export default Alteracao;
