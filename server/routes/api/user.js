const express = require('express');
const router = express.Router();

router.post('/', registerUser);
router.get('/:id', loginUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

// still need to implement findUser, resetPassword, logout, forgotPassword

module.exports = router;
