// src/Cadastro.js
import React, { useState } from 'react';

const Cadastro = ({ onCadastro }) => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        foto: null // Adiciona o estado para a foto
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            foto: URL.createObjectURL(file) // Armazena a URL da imagem
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCadastro(formData); // Chama a função passada como prop
        alert('Cadastro realizado com sucesso!');

        // Limpa o formulário após o cadastro
        setFormData({
            nome: '',
            cpf: '',
            email: '',
            telefone: '',
            foto: null // Reseta a foto
        });
    };

    return (
        <div>
            <h2>Cadastro</h2>
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
                <div>
                    <label>Foto:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            {formData.foto && <img src={formData.foto} alt="Pré-visualização" style={{ width: '100px', marginTop: '10px' }} />}
        </div>
    );
};

export default Cadastro;
