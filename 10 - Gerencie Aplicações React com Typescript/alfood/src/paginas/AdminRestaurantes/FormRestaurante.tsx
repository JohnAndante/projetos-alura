import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FormRestaurante = () => {

    const parametros = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            axios.get(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
                .then(response => {
                    const { data } = response;
                    setNomeRestaurante(data.nome);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [parametros.id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = { nome: nomeRestaurante };

        if (parametros.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, body)
                .then(response => {
                    alert('Restaurante atualizado com sucesso!');
                    navigate('/admin/restaurantes');
                })
                .catch(error => {
                    console.error(error);
                });
            return;
        }

        axios.post('http://localhost:8000/api/v2/restaurantes/', body)
            .then(response => {
                alert('Restaurante cadastrado com sucesso!');
                navigate('/admin/restaurantes');

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
                margin="normal"
                value={nomeRestaurante}
                onChange={(e) => setNomeRestaurante(e.target.value)}
                required
            />

            <br />

            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                }}
            >
                <Button variant="outlined" onClick={() => navigate('/admin/restaurantes')}>Cancelar</Button>
                <Button variant="contained" type="submit">Salvar</Button>
            </div>
        </form>
    );
}

export default FormRestaurante;
