const express = require('express');
const tourController = require('../controller/tourController')

const router = express.Router();

// This is called as the mounting the router : mounting the new route on the router.

// implementing the param middleware -> this middleware will only be called when any param is present in the url.

// here we get access to the fourt parameter, and the fourth parameter is the value of the param.
// router.param('id', tourController.checkId)


router
.route('/')
.get(tourController.getAllTours)
.post(tourController.createTour);


router
.route('/:id')
.get(tourController.getATour)
.patch(tourController.updateTour)
.delete(tourController.deleteTour);

module.exports = router;