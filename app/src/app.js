const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const routerApi = require('./routes/apiRoutes');
const routerWeather = require('./routes/weaterRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routerApi);
app.use('/weather', routerWeather);

app.use((req, res, next) => {
  const err = new Error('Route Not Found!');
  err.status = 404;
  res.status(404).json({
    error: 'Route Not Found',
    message: 'The requested route does not exist.',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
