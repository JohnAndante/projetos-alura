export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':').map(Number);
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    const segundosEmSegundos = Number(segundos);

    return horasEmSegundos + minutosEmSegundos + segundosEmSegundos;
}
