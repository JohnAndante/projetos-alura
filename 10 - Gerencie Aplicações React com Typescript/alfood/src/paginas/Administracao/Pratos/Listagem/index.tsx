import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPrato from "../../../../interfaces/IPrato";
import { httpV2 } from "../../../../http";
import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const ListagemPratos = () => {
    const navigate = useNavigate();

    const [pratos, setPratos] = useState<IPrato[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [pratoImagem, setPratoImagem] = useState<IPrato>();

    useEffect(() => {
        httpV2.get("pratos/")
            .then(response => {
                const { data } = response;
                setPratos(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleEditar = (id: number) => {
        navigate(`/admin/pratos/${id}`);
    }

    const handleExcluir = (id: number) => {
        httpV2.delete(`pratos/${id}/`)
            .then(() => {
                setPratos(pratos.filter(prato => prato.id !== id));
            })
            .catch(error => {
                console.error(error);
            });
    }

    const renderAcoes = (prato: IPrato) => {
        return (
            <>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditar(prato.id)}
                >
                    Editar
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleExcluir(prato.id)}
                >
                    Excluir
                </Button>
            </>
        );
    }

    const handleVerImagem = (prato: IPrato) => {
        setPratoImagem(prato);
        setOpenModal(true);
    }

    const renderModalImagem = () => {
        return (
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}

            >
                <Paper>
                    <img src={pratoImagem?.imagem} alt={pratoImagem?.nome} />
                </Paper>
            </Modal>
        )
    }

    return (
        <>
            <Typography variant="h4">Listagem de Pratos</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Tag</TableCell>
                            <TableCell>Imagem</TableCell>
                            <TableCell>Restaurante</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pratos.map(prato => (
                            <TableRow key={prato.id}>
                                <TableCell>{prato.nome}</TableCell>
                                <TableCell>{prato.descricao}</TableCell>
                                <TableCell>{prato.tag}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleVerImagem(prato)}
                                    >
                                        Ver Imagem
                                    </Button>
                                </TableCell>
                                <TableCell>{prato.restaurante}</TableCell>
                                <TableCell style={{ display: 'flex', gap: '8px' }}>
                                    {renderAcoes(prato)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {renderModalImagem()}
        </>
    );
}

export default ListagemPratos;
