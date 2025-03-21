module.exports = (objParams) => {
    for (let key in objParams) {
        if (/Id|id/.test(key)) {
            objParams[key] = Number(objParams[key]);
        }

        if (/cpf|Cpf/.test(key)) {
            objParams[key] = String(objParams[key]);
        }
    }

    return objParams;
};
