const express = require('express');
const router = express.Router();

router.post('/', createTrip);
router.get('/:id', findTrip);
router.patch('/:id', updateTrip);
router.delete('/:id', deleteTrip);

module.exports = router;
