import React from "react";
import Button from "../Button";
import './ListaContatos.css'

const ListaContatos = ({ contacts, onEdit, onDelete }) => {
   return (
      <div>
         <h2>Lista de Contatos</h2>
         <ul>
            {contacts.map((contact) => (
               <li key={contact.cpf}>
                  <section>
                     <strong>Nome:</strong> {contact.nome}
                  </section>

                  <section>
                     <strong>CPF:</strong> {contact.cpf}
                  </section>

                  <section>
                     <strong>Email:</strong> {contact.email}
                  </section>

                  <section>
                     <strong>Telefone:</strong> {contact.telefone}
                  </section>

                  {contact.foto && (
                     <section>
                        <strong>Foto:</strong>
                        <img src={contact.foto} alt="Contato" width="100" />
                     </section>
                  )}

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
