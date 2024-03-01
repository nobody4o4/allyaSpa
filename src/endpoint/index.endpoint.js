import axios from "axios";

export const url = axios.create({ baseURL: "http://192.168.1.95:8000/api/" });
