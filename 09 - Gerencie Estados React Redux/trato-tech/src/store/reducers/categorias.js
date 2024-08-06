import { createStandaloneToast } from '@chakra-ui/toast';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoriasService from 'services/categorias';

const { toast } = createStandaloneToast();

export const buscarCategorias = createAsyncThunk(
    'categorias/buscar',
    categoriasService.buscar
)

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState: [],
    extraReducers: builder => {
        builder
            .addCase(buscarCategorias.pending,
                (state, { payload }) => {
                    toast({
                        title: "Buscando categorias",
                        description: "Estamos buscando as categorias para você",
                        status: "info",
                        duration: 5000,
                        isClosable: true,
                        position: "top-right"
                    })
                    return [];
                }
            )
            .addCase(buscarCategorias.fulfilled,
                (state, { payload }) => {
                    // toast.closeAll();
                    toast({
                        title: "Categorias carregadas",
                        description: "As categorias foram carregadas com sucesso",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top-right"
                    })
                    return payload;
                }
            )
            .addCase(buscarCategorias.rejected,
                (state, { payload }) => {
                    // toast.closeAll();
                    toast({
                        title: "Erro ao buscar categorias",
                        description: "Não foi possível buscar as categorias",
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

export default categoriasSlice.reducer;
