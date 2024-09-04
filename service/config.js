import axios from "axios";

export const http = axios.create({
  baseURL: "https://zonu.com.br/api",
  // baseURL: "https://zonu.com.br/api",
  // baseURL: 'http://localhost:3000'
});
