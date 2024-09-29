// src/ListaContatos.js
import React from 'react';
import './ListaContatos.css'

const ListaContatos = ({ contatos, onEdit, onDelete, onShowCadastro }) => {
    return (
        <div className='listaContatos-container'>
            <h2>Lista de Contatos</h2>
            {contatos.length === 0 ? (
                <p>No momento, você não possui usuários cadastrados.</p>
            ) : (
                <ul>
                    {contatos.map((contato) => (
                        <li key={contato.cpf}>
                            {contato.nome} - {contato.email}
                            {contato.foto && (
                                <img
                                    src={contato.foto}
                                    alt={contato.nome}
                                    style={{ width: '50px', marginLeft: '10px' }}
                                />
                            )}
                            <button onClick={() => onEdit(contato)}>Editar</button>
                            <button onClick={() => onDelete(contato.cpf)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Frase para exibir o formulário de cadastro */}
            <div className='listaContatos-btn'>
                <a href="#!" onClick={onShowCadastro}>
                    Clique aqui para cadastrar um novo usuário
                </a>
            </div>
        </div>
    );
};

export default ListaContatos;
