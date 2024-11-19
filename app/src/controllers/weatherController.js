const { findByCity } = require('../services/weatherService');

exports.findWeatherByCityController = async (req, res) => {
  try {
    // Pode substituir 'req.params.city' pelo nome da cidade que preferir
    // Ex: const city = 'São Paulo';
    const city = req.params.city;

    if (!city || city.trim() === '') {
      return res
        .status(400)
        .json({ message: 'City name is required and cannot be empty.' });
    }

    const response = await findByCity(city);

    const result = {
      name: response.data.name,
      weather: response.data.weather.map((el) => {
        return {
          main: el.main,
          description: el.description,
        };
      }),
      main: {
        temp: Math.round(response.data.main.temp),
        feels_like: Math.round(response.data.main.feels_like),
        temp_min: Math.round(response.data.main.temp_min),
        temp_max: Math.round(response.data.main.temp_max),
      },
      visibility: response.data.visibility,
      wind: response.data.wind,
    };

    res.send(result);
  } catch (error) {
    console.error('Error fetching weather data:', error);

    if (error.response) {
      const statusCode = error.response.status;
      let message = 'An error occurred';
      switch (statusCode) {
        case 400:
          message = 'Bad Request: Invalid city name';
          break;
        case 401:
          message = 'Unauthorized: API key is invalid';
          break;
        case 404:
          message = 'City not found';
          break;
        case 429:
          message = 'Too Many Requests: Rate limit exceeded';
          break;
        default:
          message = 'Internal Server Error';
      }
      return res.status(statusCode).json({
        code: statusCode,
        message,
      });
    } else {
      res.status(500).json({
        code: 500,
        message: 'An unexpected error occurred.',
      });
    }
  }
};
