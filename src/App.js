// src/App.js
import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Alteracao from './components/Alteracao';
import './App.css'; // Opcional, caso queira usar estilos

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleCadastro = (novoContato) => {
    setContatos([...contatos, novoContato]);
  };

  const handleUpdate = (contatoAtualizado) => {
    setContatos(contatos.map((c) => (c.cpf === contatoAtualizado.cpf ? contatoAtualizado : c)));
    setSelectedContact(null); // Reseta a seleção após a atualização
  };

  return (
    <div className="App">
      <Cadastro onCadastro={handleCadastro} />
      {selectedContact && (
        <Alteracao contato={selectedContact} onUpdate={handleUpdate} />
      )}
      {/* Botões para selecionar contato para edição (apenas para fins de exemplo) */}
      <h3>Contatos</h3>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.cpf}>
            {contato.nome} - {contato.email}
            <button onClick={() => setSelectedContact(contato)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
