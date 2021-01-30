const path = require('path')
const express = require('express');
const app = express();
const axios = require('axios');

app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/api/availability', async (req, res) => {
  try {
    const { id } = req.query;
    const { data } = await axios.get(`http://localhost:3001/api/availability?id=${id}`);
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(err.status).json({success: false, status: err.status, message: err.message || 'There was an error'})
  }
});


app.get('/workspace-api/workspaces/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(`http://localhost:5000/workspace-api/workspaces/${id}`);
    console.log(res);
    res.json(data);
  } catch (err) {
    console.log(error);
    res.json(err);
  }

})

app.use('/', express.static(path.join(__dirname, '../', 'client', 'dist')));
const PORT = process.env.PORT || 5000;

exports.server = app.listen(PORT, console.log('app running'));
exports.app = app;

