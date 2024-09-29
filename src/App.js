import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Alteracao from './components/Alteracao';
import ListaContatos from './components/ListaContatos';
import './App.css';

const App = () => {
    const [contatos, setContatos] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isCadastroVisible, setIsCadastroVisible] = useState(false);

    const handleCadastro = (novoContato) => {
        setContatos([...contatos, novoContato]);
        setIsCadastroVisible(false);
    };

    const handleUpdate = (contatoAtualizado) => {
        setContatos(contatos.map((c) => (c.cpf === contatoAtualizado.cpf ? contatoAtualizado : c)));
        setSelectedContact(null);
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
                <ListaContatos
                    contatos={contatos}
                    onEdit={setSelectedContact}
                    onDelete={handleDelete}
                    onShowCadastro={() => setIsCadastroVisible(true)}
                />

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
