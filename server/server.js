const path = require('path')
require('dotenv').config({path: path.join(__dirname, '../', '.env')});
const express = require('express');
const app = express();
const axios = require('axios');

app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/api/availability', async (req, res) => {
  const  { originalUrl } = req;
  const base = process.env.CONTACT_API || 'http://localhost:3001';
  try {
    const { data } = await axios.get(`${ base }${ originalUrl }`);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json({success: false, status: err.status, message: err.message || 'There was an error'})
  }
});


app.get('/workspace-api/workspace/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.WORKSPACE_API || 'http://localhost:4000';
  try {
    const { data } = await axios.get(`${ base }${ path }`);
    res.json(data);
  } catch (err) {
    console.log(error);
    res.json(err);
  }

});

app.get('/api/photos/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.PHOTOS_API || `http://localhost:6001`;
  const API = `${ base }${ path }`;
  try {
    const{ data } = await axios.get(API);
    res.json(data);
  } catch (error) {
    res.json();
  }
});

app.get('/amenities-api/amenity/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.AMENITIES_API || `http://localhost:4001`;
  const API = `${ base }${ path  }`;
  try {
    const{ data } = await axios.get(API);
    res.json(data);
  } catch (error) {
    res.json();
  }
});

app.get('/api/workspace-description/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.DESCRIPTION_API || 'http://localhost:6060';
  try {
    const{ data } = await axios.get(`${ base }${ path }`);
    res.json(data);
  } catch (error) {
    res.json()
  }
});

app.get('/api/nearbyworkspaces/buildings/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.NEARBY_API || `http://localhost:5001`;
  const API = `${ base }${ path }`;
  try {
    const{ data } = await axios.get(API);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json();
  }
});

app.get('/api/getNearbyTransitOptions/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.LOCATION_API || 'http://localhost:3002';
  try {
    const { data } = await axios.get(`${ base }${ path }`);
    res.json(data);
  } catch (error) {
    res.json();
  }
});

app.get('/api/reviews/:route/:id', async (req, res) => {
  const { path } = req;
  const base = process.env.REVIEW_API || 'http://localhost:5002';
  const API = `${ base }${ path }`;
  try {
    const{ data } = await axios.get(API);
    res.json(data);
  } catch (error) {
    res.json();
  }
})

app.use('/', express.static(path.join(__dirname, '../', 'client', 'dist')));
const PORT = process.env.PORT || 5000;

exports.server = app.listen(PORT, console.log('app running'));
exports.app = app;

