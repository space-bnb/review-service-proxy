const path = require('path')
const express = require('express');
const app = express();

app.use('/buildings/:workspaceId', express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use('/', express.static(path.join(__dirname, '../', 'client', 'dist')));
const PORT = process.env.PORT || 5000;

exports.server = app.listen(PORT, console.log('app running'));
exports.app = app;

