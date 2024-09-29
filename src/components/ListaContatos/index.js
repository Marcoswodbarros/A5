import React from 'react';
import Button from '../Button';
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
                            {contato.foto && (
                                <img
                                    src={contato.foto}
                                    alt={contato.nome}
                                    style={{ borderRadius: '50%', height: '50px', marginLeft: '10px', width: '50px' }}
                                />
                            )}

                            {contato.nome} /
                            {contato.email}

                            <div className='listaContatos__btn--container'>
                                <Button onClick={() => onEdit(contato)}>Editar</Button>
                                <Button onClick={() => onDelete(contato.cpf)}>Excluir</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <Button onClick={() => onShowCadastro(null)}>
                Clique aqui para cadastrar um novo usuário
            </Button>
        </div>
    );
};

export default ListaContatos;
