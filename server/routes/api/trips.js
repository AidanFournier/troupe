const express = require('express');
const router = express.Router();
const tripController = require('../../controllers/tripController');

router.post('/create', tripController.createTrip);
router.get('/:id', tripController.getTrip);
router.patch('/update/:id', tripController.updateTrip);
router.delete('/delete/:id', tripController.deleteTrip);

module.exports = router;
