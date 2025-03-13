# Docker: Criando e gerenciando containers

- Menos complexo que uma VM
- Mais leve
- Mais rápido
- Mais seguro e modularizado
- Mais fácil de escalar

## Funcionamento - Namespace e CGroups

- **PID namespace**: Processos isolados
- **NET namespace**: Rede isolada
- **IPC namespace**: Comunicação entre processos isolada (processos e memória compartilhada)
- **MNT namespace**: Sistema de arquivos isolado
- **UTS namespace**: Hostname isolado, kernel version, etc

- **C Groups**: Controla recursos (CPU, memória, I/O, rede, etc)

## Instalação

### Windows

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Importante: **Ativar WSL2**
- Next -> Next -> Next -> Finish

### Linux

#### Ubuntu

#### Arch

```bash
sudo pacman -S docker
sudo pacman -S docker-compose
```
