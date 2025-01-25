import { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const FormRestaurante = () => {

    const [nomeRestaurante, setNomeRestaurante] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = { nome: nomeRestaurante };

        axios.post('http://localhost:8000/api/v2/restaurantes/', body)
            .then(response => {
                alert('Restaurante cadastrado com sucesso!');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="standard"
                label="Nome do restaurante"
                fullWidth
                margin="normal"
                value={nomeRestaurante}
                onChange={(e) => setNomeRestaurante(e.target.value)}
                required
            />

            <Button variant="contained" type="submit">Salvar</Button>
        </form>
    );
}

export default FormRestaurante;
