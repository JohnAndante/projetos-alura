import axios from "axios";

const httpV2 = axios.create({
    baseURL: 'http://localhost:8000/api/v2/'
})

const httpV1 = axios.create({
    baseURL: 'http://localhost:8000/api/v1/'
})

export { httpV2, httpV1 }
