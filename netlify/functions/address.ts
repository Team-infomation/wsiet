exports.handler = async function (event, context) {
  console.log("이거작동함?", event, context);
  const { lat, lon } = event.queryStringParameters;
  const API_KEY = process.env.REACT_API_KEY_V_WORLD;

  const apiUrl = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=EPSG:4326&type=ROAD&point=${lat},${lon}&format=json&errorformat=json&key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      // body: JSON.stringify(data),
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API 요청 중 오류가 발생했습니다." }),
    };
  }
};
