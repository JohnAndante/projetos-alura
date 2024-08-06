import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/toast';
import itensService from 'services/itens';
import { v4 as uuid } from 'uuid';

const { toast } = createStandaloneToast();

export const buscarItens = createAsyncThunk(
    'itens/buscar',
    itensService.buscar
)

const itensSlice = createSlice({
    name: 'itens',
    initialState: [],
    reducers: {
        mudarFavorito: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload);
            Object.assign(state[index], { favorito: !state[index].favorito });
        },
        cadastrarItem: (state, { payload }) => {
            state.push({ ...payload, id: uuid() });
        },
        mudarItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload.id);
            Object.assign(state[index], payload.item);
        },
        deletarItem: (state, { payload }) => {
            const index = state.findIndex(item => item.id === payload);
            state.splice(index, 1);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(buscarItens.fulfilled,
                (state, { payload }) => {
                    // toast.closeAll();
                    toast({
                        title: "Itens carregados",
                        description: "Os itens foram carregados com sucesso",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top-right"
                    })
                    state.push(...payload);
                }
            )
            .addCase(buscarItens.pending,
                (state, { payload }) => {
                    toast({
                        title: "Buscando itens",
                        description: "Estamos buscando os itens para você",
                        status: "info",
                        duration: 5000,
                        isClosable: true,
                        position: "top-right"
                    })
                    return []
                }
            )
            .addCase(buscarItens.rejected,
                (state, { payload }) => {
                    // toast.closeAll();
                    toast({
                        title: "Erro ao buscar itens",
                        description: "Não foi possível buscar os itens",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "top-right"
                    })
                    return [];
                }
            )
    }
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem } = itensSlice.actions;

export default itensSlice.reducer;
