const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/', userController.registerUser);
// router.get('/:id', findUser);
// router.patch('/:id', updateUser);
// router.delete('/:id', deleteUser);

module.exports = router;
