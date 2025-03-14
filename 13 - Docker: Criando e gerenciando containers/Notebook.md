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

## Comandos

- `docker run <imagem>`: Cria um container a partir de uma imagem.
- `docker ps`: Lista containers em execução.
- `docker ps -a`: Lista todos os containers.
- `docker stop <container>`: Para um container.
- `docker start <container>`: Inicia um container.
- `docker pause <container>`: Pausa um container.
- `docker unpause <container>`: Despausa um container.
- `docker rm <container>`: Remove um container.
- `docker rmi <imagem>`: Remove uma imagem.
- `docker exec -it <container> <comando>`: Executa um comando em um container. `-it` é para interatividade.
- `docker inspect <container>`: Mostra informações detalhadas de um container.
- `docker logs <container>`: Mostra os logs de um container.
- `docker pull <imagem>`: Baixa uma imagem.
- `docker build -t <nome> .`: Cria uma imagem a partir de um Dockerfile.
- `docker history <imagem>`: Mostra o histórico de uma imagem.
- `docker images`: Lista imagens.

### Anatomia do `docker run`

Busca a imagem no repositório local. Se não encontrar, busca no Docker Hub.
Após baixar a imagem, cria um container a partir dela.

- `docker run <imagem>`: Cria um container a partir de uma imagem.
- `docker run -d <imagem>`: Roda o container em background.
- `docker run -it <imagem> <comando>`: Executa um comando em um container.
- `docker run -p <porta_host>:<porta_container> <imagem>`: Mapeia uma porta do host para uma porta do container.
- `docker run -v <pasta_host>:<pasta_container> <imagem>`: Mapeia uma pasta do host para uma pasta do container.
- `docker run --name <nome> <imagem>`: Dá um nome ao container.
- `docker run --rm <imagem>`: Remove o container após a execução.
- `docker run --env <variável>=<valor> <imagem>`: Define uma variável de ambiente.
- `docker run --entrypoint <comando> <imagem>`: Define um comando de entrada.
- `docker run <imagem> sleep <tempo>`: Executa um comando de sleep - O container é encerrado após o tempo especificado (aceita tempo em segundos, minutos, horas, etc - ex: `1m`).

### Anatomia do `ps`

- `docker ps`: Lista containers em execução.
- `docker ps -a`: Lista todos os containers.
- `docker ps -q`: Lista apenas os IDs dos containers.
- `docker ps -f <filtro>`: Filtra containers.
- `docker ps -f status=exited`: Filtra containers que estão parados.
- `docker ps -f status=running`: Filtra containers que estão rodando.
- `docker ps -f name=<nome>`: Filtra containers por nome.
- `docker ps -f id=<id>`: Filtra containers por ID.

#### Formato da saída

- `CONTAINER ID`: ID do container
- `IMAGE`: Imagem usada para criar o container
- `COMMAND`: Comando executado na criação/última execução
- `CREATED`: Tempo desde que o container foi criado
- `STATUS`: Status do container
- `PORTS`: Portas mapeadas
- `NAMES`: Nome do container

### Anatomia do `stop`

Para um ou mais containers.

- `docker stop <container>`: Para um container.
- `docker stop <container1> <container2>`: Para vários containers.
- `docker stop $(docker ps -q)`: Para todos os containers.

### Anatomia do `start`

Inicia um ou mais containers.

- `docker start <container>`: Inicia um container.
- `docker start <container1> <container2>`: Inicia vários containers.
- `docker start $(docker ps -a -q)`: Inicia todos os containers.

### Anatomia do `pause / unpause`

Pausa e despausa um ou mais containers.

- `docker pause <container>`: Pausa um container.
- `docker pause <container1> <container2>`: Pausa vários containers.
- `docker pause $(docker ps -q)`: Pausa todos os containers.
- `docker unpause <container>`: Despausa um container.
- `docker unpause <container1> <container2>`: Despausa vários containers.
- `docker unpause $(docker ps -q)`: Despausa todos os containers.

### Anatomia do `rm`

Remove um ou mais containers.

- `docker rm <container>`: Remove um container.
- `docker rm <container1> <container2>`: Remove vários containers.
- `docker rm $(docker ps -a -q)`: Remove todos os containers.

### Anatomia do `rmi`

Remove uma ou mais imagens.

- `docker rmi <imagem>`: Remove uma imagem.
- `docker rmi <imagem1> <imagem2>`: Remove várias imagens.
- `docker rmi $(docker images -q)`: Remove todas as imagens.

### Anatomia do `exec`

Executa um comando em um container. Útil para entrar no shell do container, executar comandos, etc.

- `docker exec -it <container> <comando>`: Executa um comando em um container. `-it` é para interatividade.
- `docker exec -it <container> bash`: Entra no shell do container.
- `docker exec -it <container> sh`: Entra no shell do container (caso não tenha bash).
- `docker exec -it <container> <comando> > <arquivo>`: Salva a saída do comando em um arquivo.
- `docker exec -it <container> <comando> < <arquivo>`: Usa um arquivo como entrada para o comando.
- `docker exec -it <container> <comando> | grep <termo>`: Filtra a saída do comando por um termo.
- `docker exec -it <container> mysql -u root -p`: Entra no MySQL do container.
- `docker exec -it <container> psql -U postgres`: Entra no PostgreSQL do container.

## Imagem

- Composta por camadas
- Possível "visualizar" as camadas com `docker history <imagem>`
- Cada camada é uma diferença da camada anterior
- Cada camada é somente leitura

### Criando uma imagem - Dockerfile

- `FROM <imagem>`
  - Imagem base
  - Deve ser a primeira instrução do Dockerfile
  - `FROM node:14`

- `RUN <comando>`
  - Comando a ser executado na criação da imagem
  - `RUN apt-get update`

- `COPY <origem> <destino>`
  - Copia arquivos para o container (base do projeto para dentro do container)
  - `COPY . .`
  - `COPY package.json .`

- `WORKDIR <diretório>`
  - Diretório de trabalho, onde os comandos serão executados por padrão
  - `WORKDIR /app`

- `CMD ["comando", "argumento"]`
  - Comando de entrada
  - `CMD ["node", "index.js"]`

- `EXPOSE <porta>`
  - Expõe uma porta
  - `EXPOSE 3000`

- `ARG <variável>`
  - Define uma variável de ambiente - vai ser passada na hora de construir a imagem, não na execução
  - `ARG PORT=3000`

- `ENV <variável>=<valor>`
  - Define uma variável de ambiente - vai ser passada na execução, poderá ser sobrescrita e utilizada internamente
  - `ENV PORT=3000`
  - `ENV PORT=$PORT`
  - `ENV NODE_ENV=production`

- `ENTRYPOINT ["comando", "argumento"]`
  - Comando de entrada (não é sobrescrito)
  - `ENTRYPOINT ["node", "index.js"]`

- `VOLUME <diretório>`
  - Cria um volume para persistência de dados
  - `VOLUME /app`

- `USER <usuario>`
  - Define um usuário, útil para segurança e permissões
  - `USER node`

#### Exemplo

Uma imagem simples com Node.js e Express.

```Dockerfile
FROM node:14

WORKDIR /app-node

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

### Construindo uma imagem

- `docker build -t <nome> .`: Cria uma imagem a partir de um Dockerfile.
- `docker build -t <nome> -f <Dockerfile> .`: Cria uma imagem a partir de um Dockerfile específico.
- `docker build -t <nome>/<repositório>:<tag> .`: Cria uma imagem com repositório e tag.
- `docker build -t <nome> --build-arg <variável>=<valor> .`: Passa uma variável de ambiente para o Dockerfile.

### Publicando uma imagem no Docker Hub

- `docker login`: Loga no Docker Hub.
- `docker tag <imagem> <nome>/<repositório>:<tag>`: Adiciona um nome e tag à imagem.
    - Exemplo: `docker tag node-app:latest node-app-tag:1.0`
- `docker push <nome>/<repositório>:<tag>`: Publica a imagem no Docker Hub.

## Persistência de dados

- **Volumes**: Persistência de dados

Quando um container é removido, os dados são perdidos. Para persistir os dados, é necessário criar um volume.

```
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
node         14        4d3e5f7e8e3d   2 weeks ago    943MB (virtual 943MB)
```

A informação exibida no SIZE se divide em duas partes: o tamanho da imagem e o tamanho virtual.

- **Tamanho da imagem**: Tamanho do arquivo que contém a imagem. Inclui dados como o sistema operacional, bibliotecas, etc. Caso seja um banco de dados, por exemplo, o tamanho da imagem será maior de acordo com a população de dados.
Caso não seja configurado um volume para persistência de dados, ao remover o container, os dados serão perdidos.

- **Tamanho virtual**: Tamanho da imagem em execução (entre parênteses). Inclui o tamanho da imagem e o tamanho dos dados em execução.

### Volumes

Quando queremos persistir dados, podemos mapear uma pasta do host para uma pasta do container, com os **mounts** e **binds**.

#### Mounts e Binds

- `docker run -v <pasta_host>:<pasta_container> <imagem>`: Mapeia uma pasta do host para uma pasta do container.
  - <pasta_host>: Pasta no host, na máquina local
  - <pasta_container>: Pasta no container, dentro do container mesmo

Exemplo:

```bash
docker run -v /home/usuario/app:/app node-app
docker run -v /mysql:/var/lib/mysql mysql
```

> Existe um possível macete para compartilhar a mesma pasta entre containers, mas não é recomendado.

- `docker run -it -v --mount type=bind,source=<pasta_host>,target=<pasta_container> <imagem>`: Mapeia uma pasta do host para uma pasta do container.
  - `--mount`: Define o tipo de montagem
  - `type=bind`: Tipo de montagem
  - `source`: Pasta no host, na máquina local
  - `target`: Pasta no container, dentro do container mesmo

Exemplo:

```bash
docker run -it --mount type=bind,source=/home/usuario/app,target=/app node-app
docker run -it --mount type=bind,source=/mysql,target=/var/lib/mysql mysql
```

Porém, utilizando o método de mapeamento, deixamos em aberto a possibilidade de interferência e exclusão de dados por parte do usuário, possibilitando a alteração, remoção e adição de arquivos.

Para evitar isso, podemos utilizar volumes anônimos e nomeados.

#### Volumes anônimos e nomeados

Quando desejamos persistir dados, podemos utilizar volumes anônimos e nomeados.

Os volumes anônimos são criados automaticamente pelo Docker, enquanto os volumes nomeados são criados manualmente.

- `docker run -v <pasta_container> <imagem>`: Cria um volume anônimo.
- `docker run -v <nome>:<pasta_container> <imagem>`: Cria um volume nomeado.

Exemplo:

```bash
docker run -v /app node-app # Volume anônimo
docker run -v data:/var/lib/mysql mysql # Volume nomeado
```

Também é possível criar utilizando a flag `--mount`.

- `docker run -it --mount source=<nome>,target=<pasta_container> <imagem>`: Cria um volume nomeado.
  - `--mount`: Define o tipo de montagem
  - `type=volume`: Tipo de montagem
  - `source`: Nome do volume
  - `target`: Pasta no container, dentro do container mesmo

Exemplo:

```bash
docker run -it --mount type=volume,source=app,target=/app node-app
docker run -it --mount type=volume,source=data,target=/var/lib/mysql mysql
```

Ao executar os comandos acima, o Docker cria um volume anônimo ou nomeado, que pode ser acessado e gerenciado posteriormente.

Caso o volume já exista, ele será reutilizado.

Os volumes são criados dentro de `/var/lib/docker/volumes`.
Seu conteúdo é acessível como superusuário, mas não para o usuário regular.

#### Mounts tmpfs

O Docker também permite criar volumes temporários, que são armazenados na memória RAM.

Esses volumes são úteis para armazenar dados sensíveis, como senhas, tokens, etc.

- `docker run -it --tmpfs <pasta_container> <imagem>`: Cria um volume temporário.
  - `--tmpfs`: Define o tipo de montagem
  - `source`: Pasta no host, na máquina local
  - `target`: Pasta no container, dentro do container mesmo

- `docker run -it --mount type=tmpfs,destination=<pasta_container> <imagem>`: Cria um volume temporário.
  - `--mount`: Define o tipo de montagem
  - `type=tmpfs`: Tipo de montagem
  - `destination`: Pasta no container, dentro do container mesmo

Exemplo:

```bash
docker run -it --tmpfs /app node-app
docker run -it --mount type=tmpfs,destination=/app node-app
```

### Comandos

Podemos gerenciar os volumes com os seguintes comandos:

- `docker volume ls`: Lista volumes.
- `docker volume create <nome>`: Cria um volume.
- `docker volume inspect <nome>`: Mostra informações detalhadas de um volume.
- `docker volume rm <nome>`: Remove um volume.


