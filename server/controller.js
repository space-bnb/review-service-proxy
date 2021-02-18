const axios = require('axios');

module.exports =  (serviceUrl = '', localPort = '') => async (req, res, next) => {
  // take provided url or fall back to localhost
  if (!serviceUrl && !localPort) {
    const err = new Error('No forwarding destination provided');
    next(err);
  }
  const base = serviceUrl || `http://localhost:${localPort}`;
  const { originalUrl } = req;
  console.log(`Forwarding: ${originalUrl} to:${base}`);
  try {
    const { data } = await axios.get(`${base}${originalUrl}`);
    res.json(data);
  } catch (error) {
    next(error);
  }
};