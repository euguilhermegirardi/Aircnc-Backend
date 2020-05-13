const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
const ApprovalController = require('./controllers/ApprovalController');
const DeclineController = require('./controllers/DeclineController');


routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

// Accept or Decline the request from the frontend.
routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/declines', DeclineController.store);

// REST API
// GET: To search for an information from the backend
// POST: To create a new info in the backend
// PUT: To edit an information
// DELETE: To delete.

module.exports = routes;
