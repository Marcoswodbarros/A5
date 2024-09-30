import React, { useEffect, useState } from "react";
import FormContato from "./components/Form";
import ListaContatos from "./components/ListaContatos";
import Button from "./components/Button";
import './App.css'

function App() {
   const [contacts, setContacts] = useState([]);
   const [formVisible, setFormVisible] = useState(false);
   const [editingContact, setEditingContact] = useState(null);

   const fetchContacts = async () => {
      const response = await fetch("http://localhost:5000/contacts");
      const data = await response.json();
      setContacts(data);
   };

   useEffect(() => {
      fetchContacts();
   }, []);

   const addContact = async (newContact) => {
      const response = await fetch("http://localhost:5000/contacts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newContact),
      });
      const data = await response.json();
      setContacts([...contacts, data]);
      setFormVisible(false);
   };

   const updateContact = async (updatedContact) => {
      await fetch(`http://localhost:5000/contacts/${updatedContact.cpf}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(updatedContact),
      });
      setContacts(
         contacts.map((contact) =>
            contact.cpf === updatedContact.cpf ? updatedContact : contact
         )
      );
      setFormVisible(false);
   };

   const deleteContact = async (cpf) => {
      const confirmed = window.confirm("Você realmente deseja excluir este contato?");
      if (confirmed) {
         await fetch(`http://localhost:5000/contacts/${cpf}`, {
            method: "DELETE",
         });
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
