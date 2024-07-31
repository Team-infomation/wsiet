import axios from "../util/instance";

export const getFoodStoreInfo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`ggdata/store`, {
        headers: {},
      })
      .then((response) => {
        resolve(response);
        console.log("식당", response);
      })
      .catch((error) => {
        reject(error);
        console.log(error);
      });
  });
};
