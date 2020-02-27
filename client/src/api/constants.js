import axios from "axios";

export const endpoints = {
  getQuestions: "/questions",
  postResults: "/result"
};

export const createAxios = () => {
  return axios.create({
    baseURL: "http://localhost:4000"
  });
};
