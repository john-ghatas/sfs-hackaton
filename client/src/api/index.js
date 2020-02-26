import { endpoints, createAxios } from "./constants";

const axios = createAxios();

const getAllMinors = async () => {
  await axios
    .get(endpoints.getMinors)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default {
  getAllMinors
};
