const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

// Register a user
const registerUser = async (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    try {
        await newUser.save();
        res.status(200).json({ message: 'User created!'});
        console.log('User created!');
    } catch(error){
        console.log(error);
        res.status(400).json({ message: error.message })
    }    
}

// Login 
const loginUser = async (req, res) => {
    const loginCredentials = req.body;
}

module.exports = { registerUser };