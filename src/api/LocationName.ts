import axios from "axios";

export const getLocationName = (lat: number, lon: number) => {
  const changeString = lat.toString() + "," + lon.toString();
  axios
    .get("https://api.vworld.kr/req/address", {
      headers: {},
      params: {
        service: "address",
        request: "getaddress",
        version: "2.0",
        crs: "EPSG:4326",
        type: "ROAD",
        // point: changeString,
        point: "127.0494155,37.2440583",
        format: "json",
        errorformat: "json",
        key: process.env.REACT_API_KEY_V_WORLD,
      },
    })
    .then((response) => {
      console.log("주소 API", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
