import axios from "../util/instance";

export const getFoodStoreInfo = (lat: number, lon: number) => {
  axios
    .get(`vworld/locationName?lat=${lat}&lon=${lon}`, {
      headers: {},
    })
    .then((response) => {
      console.log("주소 API", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
