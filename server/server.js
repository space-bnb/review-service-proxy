const path = require('path')
const express = require('express');
const app = express();
const forwardingController = require('./controller.js');

app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'client', 'dist')));

app.get('/api/availability', forwardingController(process.env.CONTACT_API, 3001));
app.get('/workspace-api/workspace/:id', forwardingController(process.env.WORKSPACE_API, 4000));
app.get('/api/photos/:id', forwardingController(process.env.PHOTOS_API, 6001));
app.get('/api/photos/workspace/:id', forwardingController(process.env.PHOTOS_API, 6001));
app.get('/amenities-api/amenity/:id', forwardingController(process.env.AMENITIES_API, 4001));
app.get('/api/workspace-description/:id', forwardingController(process.env.DESCRIPTION_API, 6060));
app.get('/api/nearbyworkspaces/buildings/:id', forwardingController(process.env.NEARBY_API, 5001));
app.get('/api/getNearbyTransitOptions/:id', forwardingController(process.env.LOCATION_API, 3002));
app.get('/api/reviews/:route/:id', forwardingController(process.env.REVIEW_API, 5002));
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use((err, req, res, next) => {
  console.log(err.message);
  res.json();
});

const PORT = process.env.PORT || 5000;
exports.server = app.listen(PORT, console.log('app running'));
exports.app = app;

