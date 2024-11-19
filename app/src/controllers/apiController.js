exports.isAlive = async (req, res, next) => {
  try {
    res.send('Welcome to the weather API!');
  } catch (error) {
    res.status(error);
  }
};
