import axios from "../util/instance";

export const getFoodStoreInfo = (location: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`ggdata/store?location=${location}`, {
        headers: {},
      })
      .then((response) => {
        resolve(response);
        console.log("식당", response);
      })
      .catch((error) => {
        reject(error);
        console.log("식당 데이터 에러 ", error);
      });
  });
};
