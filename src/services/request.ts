import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json"
  }
});

request.interceptors.response.use(
  (response: any) => response.data,
  async (error) => await Promise.reject(error)
);

export default request;
