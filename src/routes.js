const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
// req.query = Access Query params (to filter)
// req.params = Access rote params (to edit, delete)
// req.body = Access the body of the req (to create, edit)

// GET: To search for an information from the backend
// POST: To create a new info in the backend
// PUT: To edit an information
// DELETE: To delete.

module.exports = routes;
