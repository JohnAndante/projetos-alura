import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { httpV2 } from "../../http";

import { Box, Button, TextField, Typography } from "@mui/material";

const FormRestaurante = () => {

    const parametros = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            httpV2.get(`restaurantes/${parametros.id}/`)
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
            httpV2.put(`restaurantes/${parametros.id}/`, body)
                .then(() => {
                    alert('Restaurante atualizado com sucesso!');
                    navigate('/admin/restaurantes');
                })
                .catch(error => {
                    console.error(error);
                });
            return;
        }

        httpV2.post('restaurantes/', body)
            .then(() => {
                alert('Restaurante cadastrado com sucesso!');
                navigate('/admin/restaurantes');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
        >
            <Typography component="h1" variant="h4">
                Formulário de Restaurantes
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <TextField
                    variant="standard"
                    label="Nome do restaurante"
                    fullWidth
                    value={nomeRestaurante}
                    onChange={(e) => setNomeRestaurante(e.target.value)}
                    required
                />

                <div
                    style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button variant="outlined" onClick={() => navigate('/admin/restaurantes')}>Cancelar</Button>
                    <Button variant="contained" type="submit">Salvar</Button>
                </div>
            </Box >
        </Box>
    );
}

export default FormRestaurante;
