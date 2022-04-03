const express = require('express');
const router = express.Router();

const User = require('../models/User.js');
const userController = require('../controllers/User.js');