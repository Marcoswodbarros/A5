import React, { useState, useEffect } from "react";
import Button from "../Button";
import './Form.css'

const FormContato = ({ contact, onSubmit, onCancel }) => {
   const [name, setName] = useState("");
   const [cpf, setCpf] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");

   useEffect(() => {
      if (contact) {
         setName(contact.name);
         setCpf(contact.cpf);
         setEmail(contact.email);
         setPhone(contact.phone);
      } else {
         setName("");
         setCpf("");
         setEmail("");
         setPhone("");
      }
   }, [contact]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (typeof onSubmit === "function") {
         onSubmit({ name, cpf, email, phone });
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <section>
            <label htmlFor="name">Nome:</label>
            <input
               id="name"
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
            />
         </section>

         <section>
            <label htmlFor="cpf">CPF:</label>
            <input
               id="cpf"
               type="text"
               value={cpf}
               onChange={(e) => setCpf(e.target.value)}
               required
               disabled={!!contact}
            />
         </section>

         <section>
            <label htmlFor="email">Email:</label>
            <input
               id="email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </section>

         <section>
            <label htmlFor="phone">Telefone:</label>
            <input
               id="phone"
               type="tel"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               required
            />
         </section>

         <div className="form__btn--container">
            <Button type="submit" name={contact ? "Atualizar" : "Cadastrar"} />
            <Button type="button" onClick={onCancel} name="Cancelar" />
         </div>
      </form>
   );
};

export default FormContato;
