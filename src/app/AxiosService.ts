import axios from "axios";


export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/",
  timeout: 8000
})
