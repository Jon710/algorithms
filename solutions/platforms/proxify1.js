require("./callMock");
const axios = require("axios");
const { BASE_URL } = require("./baseUrl");

async function cityWeather(city) {
  if (typeof city !== "string") {
    throw new Error("not a string");
  }

  if (city.trim() === "") {
    throw new Error("string is empty");
  }

  const url = `${BASE_URL}&q=${city}`;

  try {
    const res = await axios.get(url);
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
      res.data.main;

    return { temp, feels_like, temp_min, temp_max, pressure, humidity };
  } catch (error) {
    if (error && error.status === 404) {
      throw new Error("city not found");
    }

    throw error;
  }
}

module.exports = {
  cityWeather,
};

// Use console.log within the cityWeather function for debugging.
// Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.
