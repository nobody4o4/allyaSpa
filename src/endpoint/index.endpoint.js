import axios from "axios";

export const url = axios.create({ baseURL: "http://192.168.1.85:8000/api/" });
export const imageURL = axios.create({
  baseURL: "http://192.168.1.77:9000/uploads/gallery",
});
