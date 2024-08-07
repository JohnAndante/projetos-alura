import instance from 'common/config/api';

const categoriasService = {
  buscar: async () => {
    const resposta = await instance.get('/categorias');
    console.log(resposta);
    return resposta.data;
  },
  buscarUmaCategoria: async (nomeCategoria) => {
    const resposta = await instance.get(`/categorias/${nomeCategoria}`);
    console.log(resposta);
    return resposta.data;
  }
}

export default categoriasService;
