import axios from "../util/instance";

export const getFoodStoreInfo = (
  location: string,
  type: string,
  page: number
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`ggdata/store?location=${location}&type=${type}&page=${page}`, {
        headers: {},
      })
      .then((response) => {
        resolve(response.data.SafetyRestrntInfo);
      })
      .catch((error) => {
        reject(error);
        console.log("식당 데이터 에러 ", error);
      });
  });
};
