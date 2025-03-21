module.exports = (cpf) => {
    if (cpf.length !== 11) return false;

    const cpfArray = Array.from(cpf).map(Number);
    const cpfDigits = cpfArray.slice(0, 9);
    const cpfCheckDigits = cpfArray.slice(9);

    const cpfDigit1 = cpfDigits.reduce((acc, digit, index) => {
        return acc + (digit * (10 - index));
    }, 0) % 11;

    const cpfDigit2 = cpfDigits.reduce((acc, digit, index) => {
        return acc + (digit * (11 - index));
    }, 0) % 11;

    cpfCheckDigits[0] = cpfCheckDigits[0] === (cpfDigit1 < 2 ? 0 : 11 - cpfDigit1) ? cpfCheckDigits[0] : false;
    cpfCheckDigits[1] = cpfCheckDigits[1] === (cpfDigit2 < 2 ? 0 : 11 - cpfDigit2) ? cpfCheckDigits[1] : false;

    return cpfCheckDigits[0] && cpfCheckDigits[1];
};
