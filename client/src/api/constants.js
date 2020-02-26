import axios from "axios";

export const endpoints = {
  getQuestions: "/questions"
};

export const createAxios = () => {
  return axios.create({
    baseURL: "http://localhost:4000"
  });
};
