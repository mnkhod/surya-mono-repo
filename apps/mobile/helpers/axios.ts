import axios from "axios";

export const fetcher = axios.create({
  baseURL: 'http://192.168.1.4:3000/api/app/',
});
