const readline = require('readline');
const weatherService = require('../services/weatherService');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Weather Console');
console.log('Enter the name of the city to get the current weather:');

rl.question('City: ', async (city) => {
  try {
    const response = await weatherService.findByCity(city);

    console.log('\nWeather Data:');
    console.log(`City: ${response.data.name}`);
    console.log('Weather:');
    response.data.weather.forEach((el, index) => {
      console.log(`  Condition ${index + 1}: ${el.main} - ${el.description}`);
    });
    console.log('Temperature:');
    console.log(`  Current: ${Math.round(response.data.main.temp)}°C`);
    console.log(`  Feels Like: ${Math.round(response.data.main.feels_like)}°C`);
    console.log(`  Min: ${Math.round(response.data.main.temp_min)}°C`);
    console.log(`  Max: ${Math.round(response.data.main.temp_max)}°C`);
    console.log(`Visibility: ${response.data.visibility} meters`);
    console.log(`Wind Speed: ${response.data.wind.speed} m/s`);
  } catch (error) {
    console.error('\nError fetching weather data:');
    if (error.response && error.response.status === 404) {
      console.error('City not found. Please check the name and try again.');
    } else {
      console.error('An error occurred. Please try again later.');
    }
  } finally {
    rl.close();
  }
});
