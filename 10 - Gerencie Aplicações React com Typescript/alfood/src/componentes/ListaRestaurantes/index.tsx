import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import IRestaurante from '../../interfaces/IRestaurante';
import IPaginacao from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import IParametrosBusca from '../../interfaces/IParametrosBusca';
import { Button, TextField } from '@mui/material';

const ListaRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const [proximaPagina, setProximaPagina] = useState('')
    const [paginaAnterior, setPaginaAnterior] = useState('')
    const [busca, setBusca] = useState('')

    const fetchDados = (url: string, filtro: AxiosRequestConfig = {}) => {
        axios.get<IPaginacao<IRestaurante>>(url, filtro)
            .then(resposta => {
                setRestaurantes(resposta.data.results)
                setProximaPagina(resposta.data.next)
                setPaginaAnterior(resposta.data.previous)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const handleFiltro = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const filtro = {
            params: {
                search: busca,
            } as IParametrosBusca,
        };

        if (busca) {
            filtro.params.search = busca;
        }

        fetchDados('http://localhost:8000/api/v1/restaurantes/', filtro);
    };

    useEffect(() => {
        fetchDados('http://localhost:8000/api/v1/restaurantes/')
    }, [])

    return (
        <section className={style.ListaRestaurantes}>
            <h1>Os restaurantes mais <em>bacanas</em>!</h1>

            <form onSubmit={handleFiltro} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <TextField label="Buscar" value={busca} onChange={(e) => setBusca(e.target.value)} />
                <Button type="submit" variant="contained">Buscar</Button>
            </form>

            {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                {<Button
                    variant="contained"
                    onClick={() => fetchDados(paginaAnterior)}
                    disabled={!paginaAnterior}
                >
                    Página Anterior
                </Button>}

                {<Button
                    variant="contained"
                    onClick={() => fetchDados(proximaPagina)}
                    disabled={!proximaPagina}
                >
                    Próxima página
                </Button>}
            </div>
        </section>
    )
}

export default ListaRestaurantes
