const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit('cadastrar_usuario', dados);
}

socket.on('cadastro_sucesso', () => alert('Usuário cadastrado com sucesso!'));
socket.on('cadastro_erro', () => alert('Erro ao cadastrar usuário!'));
socket.on('usuario_existente', () => alert('Usuário já existe!'));

export { emitirCadastrarUsuario };
