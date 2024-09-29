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

  const handleDelete = (cpf) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este contato?");
    if (confirmDelete) {
      setContatos(contatos.filter((c) => c.cpf !== cpf));
    }
  };

  return (
    <div className="App">
      <Cadastro onCadastro={handleCadastro} />
      {selectedContact && (
        <Alteracao contato={selectedContact} onUpdate={handleUpdate} />
      )}
      {/* Lista de contatos com opções de editar e excluir */}
      <h3>Contatos</h3>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.cpf}>
            {contato.nome} - {contato.email} 
            {contato.foto && <img src={contato.foto} alt={contato.nome} style={{ width: '50px', marginLeft: '10px' }} />}
            <button onClick={() => setSelectedContact(contato)}>Editar</button>
            <button onClick={() => handleDelete(contato.cpf)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
