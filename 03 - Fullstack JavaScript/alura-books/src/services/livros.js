import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
  const response = await livrosAPI.get("/");

  return response.data;
}

async function getLivrosFavoritos() {
  const response = await livrosAPI.get("/favoritos");

  return response.data;
}

export { getLivros };
