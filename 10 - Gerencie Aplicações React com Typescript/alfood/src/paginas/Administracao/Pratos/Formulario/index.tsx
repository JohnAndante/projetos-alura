import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { httpV2 } from "../../../../http";
import IPrato from "../../../../interfaces/IPrato";
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import ITag from "../../../../interfaces/ITag";
import IRestaurante from "../../../../interfaces/IRestaurante";

const FormularioPratos = () => {

    const parametros = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [dadosPrato, setDadosPrato] = useState<IPrato>({} as IPrato);
    const [tags, setTags] = useState<ITag[]>([]);
    const [tagSelecionada, setTagSelecionada] = useState<ITag>();
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    const [imagem, setImagem] = useState<File | null>();

    useEffect(() => {
        if (parametros.id) {
            httpV2.get(`pratos/${parametros.id}/`)
                .then(response => {
                    const { data } = response;
                    setDadosPrato(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [parametros.id]);

    useEffect(() => {
        async function fetchDados() {
            try {
                const [tags, restaurantes] = await Promise.all([
                    httpV2.get('tags/'),
                    httpV2.get('restaurantes/')
                ]);

                const { tags: tagsData } = tags.data as { tags: ITag[] };

                setTags(tagsData);
                setRestaurantes(restaurantes.data);
            } catch (error) {
                console.error(error);
                setTags([]);
                setRestaurantes([]);
            }
        }

        fetchDados();
    }, []);

    useEffect(() => {
        if (dadosPrato && dadosPrato.tag && tags.length > 0) {
            setTagSelecionada(tags.find(tag => tag.value === dadosPrato.tag) || {} as ITag);
        }
    }, [dadosPrato, tags]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            setImagem(files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { id, imagem, ...resto } = dadosPrato;

        const formData = new FormData();

        formData.append('nome', resto.nome);
        formData.append('descricao', resto.descricao);
        if (tagSelecionada) formData.append('tag', tagSelecionada.value);
        formData.append('restaurante', resto.restaurante.toString());

        if (parametros.id) {
            httpV2.request({
                url: `pratos/${parametros.id}/`,
                method: 'PUT',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    alert('Prato atualizado com sucesso!');
                    navigate('/admin/pratos');
                })
                .catch(error => {
                    console.error(error);
                });
            return;
        }

        if (imagem) formData.append('imagem', imagem);

        httpV2.request({
            url: 'pratos/',
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                alert('Prato cadastrado com sucesso!');
                navigate('/admin/pratos');
            })
            .catch(error => {
                console.error(error);
            });

    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                flexGrow: 1
            }}>
                <Typography component="h1" variant="h4">
                    {parametros.id ? 'Editar' : 'Cadastrar'} Prato
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        width: '100%',
                    }}
                >
                    <InputLabel id="nome">
                        Nome do prato
                        <br />
                        <TextField
                            name="nome"
                            variant="standard"
                            value={dadosPrato.nome}
                            onChange={e => setDadosPrato({ ...dadosPrato, nome: e.target.value })}
                            fullWidth
                            required
                        />
                    </InputLabel>
                    <InputLabel id="descricao">
                        Descrição
                        <br />
                        <TextField
                            name="descricao"
                            variant="standard"
                            value={dadosPrato.descricao}
                            onChange={e => setDadosPrato({ ...dadosPrato, descricao: e.target.value })}
                            fullWidth
                            required
                        />
                    </InputLabel>
                    <InputLabel id="tag">
                        Tag
                        <br />
                        <Select
                            variant="standard"
                            labelId="tag"
                            id="tag"
                            value={tagSelecionada?.id || ''}
                            defaultValue={tagSelecionada?.id || ''}
                            label="Tag"
                            onChange={e => setTagSelecionada(tags.find(tag => tag.id === Number(e.target.value)) || {} as ITag)}
                            fullWidth
                            required
                        >
                            {tags.length > 0
                                ? tags.map(tag => (
                                    <MenuItem key={tag.id} value={tag.id}>{tag.value}</MenuItem>
                                ))
                                : <MenuItem value="">Nenhuma tag encontrada</MenuItem>
                            }

                        </Select>
                    </InputLabel>
                    <InputLabel id="restaurante">
                        Restaurante
                        <br />
                        <Select
                            variant="standard"
                            labelId="restaurante"
                            id="restaurante"
                            value={dadosPrato.restaurante || ''}
                            label="Restaurante"
                            onChange={e => setDadosPrato({ ...dadosPrato, restaurante: Number(e.target.value) })}
                            fullWidth
                            required
                        >
                            {restaurantes.length > 0
                                ? restaurantes.map(restaurante => (
                                    <MenuItem key={restaurante.id} value={restaurante.id}>{restaurante.nome}</MenuItem>
                                ))
                                : <MenuItem value="">Nenhum restaurante encontrado</MenuItem>
                            }
                        </Select>
                    </InputLabel>
                    <InputLabel id="imagem" htmlFor="imagem" >
                        Imagem
                        <br />
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={handleFileChange}
                        />
                        {dadosPrato.imagem
                            ? <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                                <img src={dadosPrato.imagem} alt={dadosPrato.nome} style={{ maxWidth: '50%' }} />
                                <br />
                            </Box>
                            : <label htmlFor="raised-button-file">
                                <Button variant="outlined" component="span">
                                    Upload
                                </Button>
                            </label>
                        }
                    </InputLabel>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button variant="outlined" type="button" onClick={() => navigate('/admin/pratos')}>Cancelar</Button>
                        <Button variant="contained" type="submit">Salvar</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )

}

export default FormularioPratos;
