import React, { useState, useEffect } from "react";
import Button from '../Button'
import './Form.css'

const FormContato = ({ contact, onSubmit, onCancel }) => {
   const [nome, setNome] = useState("");
   const [cpf, setCpf] = useState("");
   const [email, setEmail] = useState("");
   const [telefone, setTelefone] = useState("");
   const [foto, setFoto] = useState(null);

   useEffect(() => {
      if (contact) {
         setNome(contact.nome);
         setCpf(contact.cpf);
         setEmail(contact.email);
         setTelefone(contact.telefone);
         setFoto(contact.foto);
      } else {
         setNome("");
         setCpf("");
         setEmail("");
         setTelefone("");
         setFoto(null);
      }
   }, [contact]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newContact = { nome, cpf, email, telefone, foto };
      onSubmit(newContact);
      resetForm();
   };


   const resetForm = () => {
      setNome("");
      setCpf("");
      setEmail("");
      setTelefone("");
      setFoto(null);
      onCancel();
   };

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setFoto(URL.createObjectURL(file));
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <section>
            <label>Nome:</label>
            <input
               type="text"
               value={nome}
               onChange={(e) => setNome(e.target.value)}
               required
            />
         </section>

         <section>
            <label>CPF:</label>
            <input
               type="text"
               value={cpf}
               onChange={(e) => setCpf(e.target.value)}
               required
            />
         </section>

         <section>
            <label>Email:</label>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </section>

         <section>
            <label>Telefone:</label>
            <input
               type="text"
               value={telefone}
               onChange={(e) => setTelefone(e.target.value)}
               required
            />
         </section>

         <section>
            <label>Foto:</label>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            {foto && <img src={foto} alt="Preview" width="100" />}
         </section>

         <div className="form__btn--container">
            <Button type="submit" name='Salvar' />
            <Button type="button" onClick={resetForm} name='Cancelar' />
         </div>
      </form>
   );
};

export default FormContato;
