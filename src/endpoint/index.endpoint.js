import axios from "axios";

export const url = axios.create({ baseURL: "http://192.168.1.84:8000/api/" });
export const imageURL = axios.create({
  baseURL: "http://192.168.1.77:8000/uploads/gallery",
});
