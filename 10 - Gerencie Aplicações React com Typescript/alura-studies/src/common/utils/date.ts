export function tempoParaSegundos(tempo: string): number {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':').map(Number);
    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    const segundosEmSegundos = Number(segundos);

    return horasEmSegundos + minutosEmSegundos + segundosEmSegundos;
}

interface ISegundosParaTempo {
    horas: number;
    minutos: number;
    segundos: number;
};

export function segundosParaTempo(segundos: number): ISegundosParaTempo {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return { horas, minutos, segundos: segundosRestantes };
}

interface ISegundosParaTempoSeparado {
    horas?: { dezena: string, unidade: string };
    minutos?: { dezena: string, unidade: string };
    segundos?: { dezena: string, unidade: string };
}

export function segundosParaCronometro(segundos: number, padrao: string): ISegundosParaTempoSeparado {
    if (segundos < 0) segundos = 0;

    // retorna conforme solicitado
    if (padrao === 'mm:ss') {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;

        return {
            minutos: {
                dezena: Math.floor(minutos / 10).toString(),
                unidade: Math.floor(minutos % 10).toString()
            },
            segundos: {
                dezena: Math.floor(segundosRestantes / 10).toString(),
                unidade: Math.floor(segundosRestantes % 10).toString()
            }
        }
    }

    if (padrao === 'hh:mm:ss') {
        // retorna com horas
        const { horas, minutos, segundos: segundosRestantes } = segundosParaTempo(segundos);

        return {
            horas: {
                dezena: Math.floor(horas / 10).toString(),
                unidade: Math.floor(horas % 10).toString()
            },
            minutos: {
                dezena: Math.floor(minutos / 10).toString(),
                unidade: Math.floor(minutos % 10).toString()
            },
            segundos: {
                dezena: Math.floor(segundosRestantes / 10).toString(),
                unidade: Math.floor(segundosRestantes % 10).toString()
            }
        }
    }

    if (padrao === 'ss') {
        return {
            minutos: {
                dezena: '',
                unidade: ''
            },
            segundos: {
                dezena: Math.floor(segundos / 10).toString(),
                unidade: Math.floor(segundos % 10).toString()
            }
        }
    }

    return {
        minutos: {
            dezena: '',
            unidade: ''
        },
        segundos: {
            dezena: '',
            unidade: ''
        }
    }
}
