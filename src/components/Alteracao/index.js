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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            foto: URL.createObjectURL(file) // Armazena a URL da nova imagem
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        alert('Dados atualizados com sucesso!');
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
                
                <div>
                    <label>Foto:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                
                <button type="submit">Atualizar</button>
            </form>
            {formData.foto && <img src={formData.foto} alt="Pré-visualização" style={{ height: '50px', marginTop: '10px', width: '50px'}} />}
        </div>
    );
};

export default Alteracao;
