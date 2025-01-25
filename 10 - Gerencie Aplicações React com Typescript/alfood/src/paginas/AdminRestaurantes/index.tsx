import { useEffect, useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AdminRestaurantes() {

    const navigate = useNavigate();
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/v2/restaurantes/")
            .then(response => {
                const { data } = response;
                setRestaurantes(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleEditar = (id: number) => {
        navigate(`/admin/restaurantes/${id}`);
    }

    const handleExcluir = (id: number) => {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${id}/`)
            .then(response => {
                alert('Restaurante excluído com sucesso!');
                setRestaurantes(restaurantes.filter(restaurante => restaurante.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantes.map(restaurante => (
                            <TableRow key={restaurante.id}>
                                <TableCell>
                                    {restaurante.nome}
                                </TableCell>
                                <TableCell style={{ display: 'flex', gap: '8px' }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleEditar(restaurante.id)}
                                    >
                                        editar
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleExcluir(restaurante.id)}
                                    >
                                        excluir
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>

                <Button
                    variant="contained"
                    style={{ backgroundColor: 'green', color: 'white', marginRight: '8px' }}
                    onClick={() => navigate('/admin/restaurantes/novo')}
                >
                    Novo Restaurante
                </Button>
            </div>
        </>
    )
}
