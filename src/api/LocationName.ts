import axios from "../util/instance";

export const getLocationName = (lat: number, lon: number) => {
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
