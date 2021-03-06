import { endpoints, createAxios } from "./constants";

const axios = createAxios();

const getAllQuestions = async lang => {
  const response = await axios
    .get(`${endpoints.getQuestions}/?lang=${lang}`)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error;
    });

  return response.data;
};

const parseResults = async (programme, tagCounts) => {
  const response = await axios
    .post(`${endpoints.postResults}`, {
      programme,
      tagCounts
    })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error;
    });

  return response.data;
};

const getResults = async (id, lang) => {
  const response = await axios
    .get(`${endpoints.postResults}?id=${id}&lang=${lang}`)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      return error;
    });

  return response.data;
};

export default {
  getAllQuestions,
  parseResults,
  getResults
};
