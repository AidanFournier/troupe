const express = require('express');
const router = express.Router();

router.post('/', registerUser);
router.get('/:id', findUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = userRouter;
