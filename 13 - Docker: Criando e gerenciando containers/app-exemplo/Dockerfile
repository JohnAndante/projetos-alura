FROM node:14

WORKDIR /app-node

ARG PORT=3000
ENV PORT=$PORT

COPY . .

RUN npm install

EXPOSE $PORT

ENTRYPOINT npm start

# docker buildx build -t johnandante/app-exemplo:1.0 .
