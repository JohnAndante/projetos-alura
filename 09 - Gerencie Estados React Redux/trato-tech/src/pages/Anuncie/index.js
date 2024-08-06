import { useDispatch, useSelector } from 'react-redux';
import { cadastrarItem } from 'store/reducers/itens';
import { useForm } from 'react-hook-form'
import Header from 'components/Header';
import styles from './Anuncie.module.scss';
import Button from 'components/Button';
import { useParams } from 'react-router-dom';
import Input from 'components/Input';

const Anuncie = () => {
    const { nomeCategoria = '' } = useParams();
    const dispatch = useDispatch();
    const categorias = useSelector((state) => state.categorias.map(({ nome, id }) => ({ nome, id })));
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            categoria: nomeCategoria
        }
    });

    const { errors } = formState;

    const cadastrar = (data) => {
        dispatch(cadastrarItem(data))
    }

    return (
        <div className={styles.container}>
            <Header titulo={'Anuncie Aqui!'} descricao={'Anuncie seu produto no melhor site do Brasil!'} />

            <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
                <Input
                    {...register('titulo', { required: 'O campo título é obrigatório' })}
                    className={errors.titulo ? styles['input-erro'] : ''}
                    placeholder='Título do produto'
                    alt='Título do produto' />
                {errors.titulo && <span className={styles['mensagem-erro']}>{errors.titulo.message}</span>}

                <Input
                    {...register('descricao', { required: 'O campo descrição é obrigatório' })}
                    className={errors.descricao ? styles['input-erro'] : ''}
                    placeholder='Descrição do produto'
                    alt='descrição do produto' />
                {errors.descricao && <span className={styles['mensagem-erro']}>{errors.descricao.message}</span>}

                <Input
                    {...register('foto', { required: 'O campo foto é obrigatório' })}
                    className={errors.foto ? styles['input-erro'] : ''}
                    placeholder='URL da foto do produto'
                    alt='URL da foto do produto' />
                {errors.foto && <span className={styles['mensagem-erro']}>{errors.foto.message}</span>}

                <select
                    {...register('categoria', { required: nomeCategoria ? false : 'O campo categoria é obrigatório' })}
                    disabled={!!nomeCategoria}
                    className={errors.categoria ? styles['input-erro'] : ''}
                >
                    <option value='' disabled >Selecione a categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.nome} value={categoria.id}>{categoria.nome}</option>
                    ))}
                </select>
                {errors.categoria && <span className={styles['mensagem-erro']}>{errors.categoria.message}</span>}

                <Input
                    {...register('preco', { required: 'O campo preço é obrigatório', valueAsNumber: true })}
                    className={errors.preco ? styles['input-erro'] : ''}
                    type='number'
                    placeholder='Preço do produto' />
                {errors.preco && <span className={styles['mensagem-erro']}>{errors.preco.message}</span>}

                <Button type='submit'>Cadastrar Produto</Button>
            </form>
        </div>
    )
}

export default Anuncie;
