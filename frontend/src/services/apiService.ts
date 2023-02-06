import Axios from "axios";

const host = process.env.REACT_APP_API_HOST;

export const apiService = Axios.create({
  baseURL: host,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
