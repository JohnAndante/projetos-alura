import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js\n",
    "/sobre": "Sobre o curso\n",
    "/contato": "Contato\n",
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url] || "Rota não encontrada\n");
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em localhost:${PORT}`);
});
