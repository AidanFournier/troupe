const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUserById);
router.get('/update/:id', userController.updateUser);
router.post('/logout', userController.logout);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
