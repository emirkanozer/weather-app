import axios from "axios";

export const getWeather = async (country) => {
  const config = {
    headers: {
      key: "709f15f1b4d148898ea85124231902",
    },
    params: {
      q: country,
      aqi: "no",
    },
  };

  const data = await axios.get(
    `http://api.weatherapi.com/v1/current.json`,
    config
  );
  return data;
};
