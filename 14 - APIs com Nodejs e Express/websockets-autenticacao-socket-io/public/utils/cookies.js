function definirCookie(chave, valor) {
    document.cookie = `${chave}=${valor}; path=/`;
}

function obterCookie(chave) {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(cookie => cookie.includes(chave));
    return cookie ? cookie.split('=')[1] : null;
}

function removerCookie(chave) {
    document.cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export { definirCookie, obterCookie, removerCookie };
