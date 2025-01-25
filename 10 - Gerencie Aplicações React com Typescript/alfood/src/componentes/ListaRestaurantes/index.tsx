import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import IParametrosBusca from '../../interfaces/IParametrosBusca';
import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { httpV1 } from '../../http';

const ListaRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    const [proximaPagina, setProximaPagina] = useState('');
    const [paginaAnterior, setPaginaAnterior] = useState('');

    const [ordenacao, setOrdenacao] = useState('nome');
    const [busca, setBusca] = useState('');


    const fetchDados = (url: string, filtro: AxiosRequestConfig = {}) => {
        httpV1.get<IPaginacao<IRestaurante>>(url, filtro)
            .then(resposta => {
                setRestaurantes(resposta.data.results);
                setProximaPagina(resposta.data.next);
                setPaginaAnterior(resposta.data.previous);
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    const handleFiltro = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const filtro = {
            params: {} as IParametrosBusca,
        };

        if (busca) filtro.params.search = busca;
        if (ordenacao) filtro.params.ordering = ordenacao;

        fetchDados('restaurantes/', filtro);
    };

    useEffect(() => {
        fetchDados('restaurantes/');
    }, [])

    return (
        <section className={style.ListaRestaurantes}>
            <h1>Os restaurantes mais <em>bacanas</em>!</h1>

            <Box component="form" onSubmit={handleFiltro} style={{ display: 'flex', gap: '16px' }}>
                <TextField
                    label="Buscar"
                    name="busca"
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                />
                <InputLabel id="select-ordenacao">
                    Ordenar por
                    {' '}
                    <Select
                        labelId="select-ordenacao"
                        id="select-ordenacao"
                        value={ordenacao}
                        label="Ordenar por"
                        onChange={(e) => setOrdenacao(e.target.value as string)}
                    >
                        <MenuItem value={"id"}>Por ID</MenuItem>
                        <MenuItem value={"nome"}>Por Nome</MenuItem>
                    </Select>
                </InputLabel>

                <Button type="submit" variant="contained">Buscar</Button>
            </Box>

            {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                <Button
                    variant="contained"
                    onClick={() => fetchDados(paginaAnterior)}
                    disabled={!paginaAnterior}
                >
                    Página Anterior
                </Button>

                <Button
                    variant="contained"
                    onClick={() => fetchDados(proximaPagina)}
                    disabled={!proximaPagina}
                >
                    Próxima página
                </Button>
            </div>
        </section>
    )
}

export default ListaRestaurantes
