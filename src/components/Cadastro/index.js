import React, { useState } from 'react';
import "./Cadastro.css"
import Button from '../Button';

const Cadastro = ({ onCadastro }) => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        foto: null
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
            foto: URL.createObjectURL(file)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCadastro(formData);
        alert('Cadastro realizado com sucesso!');

        setFormData({
            nome: '',
            cpf: '',
            email: '',
            telefone: '',
            foto: null
        });
    };

    return (
        <div id='cadastro-container'>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </section>

                <section>
                    <label>CPF:</label>
                    <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </section>

                <section>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </section>

                <section>
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </section>

                <section>
                    <label>Foto:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </section>
                
                <Button type='submit'>Cadastrar</Button>
            </form>
            {formData.foto && <img src={formData.foto} alt="Pré-visualização" style={{ width: '100px', marginTop: '10px' }} />}
        </div>
    );
};

export default Cadastro;
