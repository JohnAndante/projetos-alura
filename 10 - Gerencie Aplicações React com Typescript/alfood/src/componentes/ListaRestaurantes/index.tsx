import { useEffect, useState } from 'react';
import axios from 'axios';
import IRestaurante from '../../interfaces/IRestaurante';
import { IPaginacao } from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const [proximaPagina, setProximaPagina] = useState('')
    const [paginaAnterior, setPaginaAnterior] = useState('')

    const [pratos, setPratos] = useState<IRestaurante[]>([]);
    const baseUrlRestaurantes = 'http://localhost:8000/api/v1/restaurantes/';
    const baseUrlPratos = 'http://localhost:8000/api/v1/pratos/';

    const carregarDados = (url: string) => {
        axios.get<IPaginacao<IRestaurante>>(url)
            .then(resposta => {
                setRestaurantes(resposta.data.results)
                setProximaPagina(resposta.data.next)
                setPaginaAnterior(resposta.data.previous)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    useEffect(() => {
        carregarDados('http://localhost:8000/api/v1/restaurantes/')
    }, [])

    const verMais = async () => {
        if (proximaPagina) {
            const [promiseRestaurantes, promisePratos] = await Promise.all([
                axios.get<IPaginacao<IRestaurante>>(proximaPagina),
                axios.get<IPaginacao<IRestaurante>>(baseUrlPratos)
            ]);

            const { data: { results: restaurantes } } = promiseRestaurantes;
            const { data: { results: pratos } } = promisePratos;

            setRestaurantes(prevState => [...prevState, ...restaurantes]);
            setPratos(prevState => [...prevState, ...pratos]);
            setProximaPagina(promiseRestaurantes.data.next);
        }
    }

    return (
        <section className={style.ListaRestaurantes}>
            <h1>Os restaurantes mais <em>bacanas</em>!</h1>
            {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
            {<button onClick={() => carregarDados(paginaAnterior)} disabled={!paginaAnterior}>
                Página Anterior
            </button>}
            {<button onClick={() => carregarDados(proximaPagina)} disabled={!proximaPagina}>
                Próxima página
            </button>}
        </section>
    )
}

export default ListaRestaurantes
