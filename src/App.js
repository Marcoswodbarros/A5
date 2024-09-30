import React, { useState } from "react";
import FormContato from "./components/Form";
import ListaContatos from "./components/ListaContatos";
import Button from "./components/Button";
import './App.css'

function App() {
   const [contacts, setContacts] = useState([]);
   const [formVisible, setFormVisible] = useState(false);
   const [editingContact, setEditingContact] = useState(null);

   const addContact = (newContact) => {
      setContacts([...contacts, newContact]);
      setFormVisible(false);
   };

   const updateContact = (updatedContact) => {
      setContacts(
         contacts.map((contact) =>
            contact.cpf === updatedContact.cpf ? updatedContact : contact
         )
      );
      setFormVisible(false);
   };

   const deleteContact = (cpf) => {
      const confirmed = window.confirm("Você realmente deseja excluir este contato?");
      if (confirmed) {
         setContacts(contacts.filter((contact) => contact.cpf !== cpf));
      }
   };

   const deletePhoto = (cpf) => {
      setContacts(
         contacts.map((contact) =>
            contact.cpf === cpf ? { ...contact, foto: null } : contact
         )
      );
   };

   const showForm = () => {
      setEditingContact(null);
      setFormVisible(true);
   };

   return (
      <div className="App">
         <img src="/images/logo.png" alt="Logo da A5" className="a5-logo" />
         <h1>Gerenciamento de Contatos</h1>

         <div className="app-container">
            {formVisible ? (
               <FormContato
                  contact={editingContact}
                  onSubmit={editingContact ? updateContact : addContact}
                  onCancel={() => setFormVisible(false)}
               />
            ) : (
               <div>
                  <ListaContatos
                     contacts={contacts}
                     onEdit={(contact) => {
                        setEditingContact(contact);
                        setFormVisible(true);
                     }}
                     onDelete={deleteContact}
                     onDeletePhoto={deletePhoto}
                  />

                  <Button onClick={showForm} name="Cadastrar Novo Usuário" />
               </div>
            )}
         </div>
      </div>
   );
}

export default App;
