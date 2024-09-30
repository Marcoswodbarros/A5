import React from "react";
import Button from '../Button'
import './ListaContatos.css'

const ListaContatos = ({ contacts, onEdit, onDelete }) => {
   return (
      <div>
         <h2>Lista de Contatos</h2>
         {contacts.length === 0 ? (
            <p>No momento, você não possui usuários cadastrados.</p>
         ) : (
            <ul>
               {contacts.map((contact) => (
                  <li key={contact.cpf}>
                     {contact.foto && (
                        <section>
                           <img src={contact.foto} alt="Contato" className="listaContatos-img" />
                        </section>
                     )}

                     <section>
                        <label>Nome:</label> {contact.nome}
                     </section>

                     <section>
                        <label>CPF:</label> {contact.cpf}
                     </section>

                     <section>
                        <label>Email:</label> {contact.email}
                     </section>

                     <section>
                        <label>Telefone:</label> {contact.telefone}
                     </section>

                     <div className="listaContatos__btn--container">
                        <Button onClick={() => onEdit(contact)} name='Editar' />
                        <Button onClick={() => onDelete(contact.cpf)} name='Excluir' />
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default ListaContatos;
