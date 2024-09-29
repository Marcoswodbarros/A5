// src/App.js
import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Alteracao from './components/Alteracao';
import ListaContatos from './components/ListaContatos';
import './App.css'; // Opcional, caso queira usar estilos

const App = () => {
    const [contatos, setContatos] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isCadastroVisible, setIsCadastroVisible] = useState(false); // Controla a visibilidade do formulário

    const handleCadastro = (novoContato) => {
        setContatos([...contatos, novoContato]);
        setIsCadastroVisible(false); // Oculta o formulário após o cadastro
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
            <h1>Gerenciamento de Contatos</h1>
            <div className='app-container'>
                {/* Lista de contatos e link para exibir o formulário de cadastro */}
                <ListaContatos
                    contatos={contatos}
                    onEdit={setSelectedContact}
                    onDelete={handleDelete}
                    onShowCadastro={() => setIsCadastroVisible(true)} // Controla o clique no link para exibir o cadastro
                />

                {/* Formulário de cadastro controlado por visibilidade */}
                {isCadastroVisible && (
                    <div>
                        <Cadastro onCadastro={handleCadastro} />
                        <button onClick={() => setIsCadastroVisible(false)}>Fechar Cadastro</button>
                    </div>
                )}

                {selectedContact && (
                    <Alteracao contato={selectedContact} onUpdate={handleUpdate} />
                )}
            </div>
        </div>
    );
};

export default App;
