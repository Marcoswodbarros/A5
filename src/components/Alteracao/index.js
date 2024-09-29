// src/Alteracao.js
import React, { useState } from 'react';

const Alteracao = ({ contato, onUpdate }) => {
    const [formData, setFormData] = useState(contato);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para atualizar os dados em uma API ou outro sistema
        onUpdate(formData);
        alert('Dados atualizados com sucesso!');

        // Limpa o formulário após a atualização
        setFormData({
            nome: '',
            cpf: '',
            email: '',
            telefone: ''
        });
    };

    return (
        <div>
            <h2>Alteração de Contato</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>CPF:</label>
                    <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    );
};

export default Alteracao;
