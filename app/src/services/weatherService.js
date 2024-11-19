const axios = require('axios');
require('dotenv').config();

exports.findByCity = async (city) => {
  return await axios.get(
    process.env.OPENWEATHERMAP_BASE_URL +
      `/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
  );
};
