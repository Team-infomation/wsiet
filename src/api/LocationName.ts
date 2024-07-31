import axios from "../util/instance";

export const getLocationName: any = (lat: number, lon: number) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`vworld/locationName?lat=${lat}&lon=${lon}`, { headers: {} })
      .then((response) => {
        console.log("작동");
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
