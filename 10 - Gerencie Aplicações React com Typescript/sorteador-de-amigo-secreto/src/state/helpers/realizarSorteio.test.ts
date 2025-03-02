import { realizarSorteio } from "./realizarSorteio";

describe('Teste de sorteio do helper realizarSorteio', () => {

    test('Cada participante não pode sortear a si mesmo', () => {

        const participantes = [
            'Tobias',
            'Ana',
            'Jezebel',
            'Cleiton',
            'Jodirbaldino',
        ];

        const sorteio = realizarSorteio(participantes);

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toBe(participante);
        });
    });

})
