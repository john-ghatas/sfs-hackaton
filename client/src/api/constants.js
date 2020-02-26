import axios from "axios";

export const endpoints = {
  getMinors: "/get-all-minors"
};

export const createAxios = () => {
  return axios.create({
    baseURL: "http://localhost:4000"
  });
};
