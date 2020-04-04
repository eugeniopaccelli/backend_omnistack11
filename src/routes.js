const express = require('express');

const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

// Default Route
routes.get("/", (request, response) => {
  response.json({ "msg" : "God is not here..." })
})

// Ong Routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Incident Routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Profile Routes
routes.get('/profile', ProfileController.index);

// Session Routes
routes.post('/sessions', SessionController.create);

module.exports = routes;