const express = require('express');
const el = require('connect-ensure-login');

const protRoutes = express.Router();


protRoutes.get('/secret', el.ensureLoggedIn(), (req, res, next) => {
  res.send('SHHHHHHH its a secret');
});

protRoutes.get('/kgb-files', el.ensureLoggedIn(), (req, res, next) => {
  res.send('In Soviet Russia, files store you.');
});


module.exports = protRoutes;
