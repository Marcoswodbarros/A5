import React from "react";
import Button from "../Button";
import './ListaContatos.css'

const ListaContatos = ({ contacts = [], onEdit, onDelete }) => {
   if (!contacts || contacts.length === 0) {
      return <p>No momento, você não possui usuários cadastrados.</p>;
   }

   return (
      <div>
         <ul>
            {contacts.map((contact) => (
               <li key={contact.cpf}>
                  {contact.name} - {contact.email}

                  <div className="listaContatos__btn--container">
                     <Button onClick={() => onEdit(contact)} name='Editar' />
                     <Button onClick={() => onDelete(contact.cpf)} name='Excluir' />
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ListaContatos;
