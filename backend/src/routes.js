const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const { createOngValidator, indexIncidentValidator, deleteIncidentValidator, profileIndexValidator } = require('./validators')

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ong
routes.get('/ongs', OngController.index);
routes.post('/ongs', createOngValidator(), OngController.create);

//incident
routes.get('/incidents', indexIncidentValidator() , IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', deleteIncidentValidator() , IncidentsController.delete);

//profile
routes.get('/profile', profileIndexValidator(), ProfileController.index);

//session
routes.post('/sessions', SessionController.create);

module.exports = routes;