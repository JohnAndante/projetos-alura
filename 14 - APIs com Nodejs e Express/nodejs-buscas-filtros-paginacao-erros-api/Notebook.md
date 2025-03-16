## Middlewares

Middlewares são funções que "interceptam" dados antes de serem processados por um controlador. Eles são muito úteis para validar dados, autenticar usuários, entre outras coisas.

Para criar um middleware, basta criar uma função que recebe três parâmetros: `req`, `res` e `next`. O `req` é o objeto de requisição, o `res` é o objeto de resposta e o `next` é uma função que chama o próximo middleware.

Por exemplo, vamos criar um middleware que verifica se o usuário está autenticado:

```javascript
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send('Unauthorized');
}
```

Para usar o middleware, basta passá-lo como segundo argumento para a rota que você quer proteger:

```javascript
app.get('/protected', isAuthenticated, (req, res) => {
  res.send('This is a protected route');
});
```

Neste exemplo, a rota `/protected` só será acessível se o usuário estiver autenticado. Caso contrário, ele receberá um status 401 (Unauthorized).

