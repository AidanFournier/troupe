const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

// Register a user
exports.registerUser = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    checkUsername();

    function checkUsername(){
        User.findOne({ username: req.body.username }, (err, userWithSameUsername) => {
            if(err){
                console.log(err);
                return res.status(400).json({
                    message: "BOOMXHAKALACA"
                });
            } else if(userWithSameUsername){
                return res.status(400).json({ 
                    message: "Username is taken. Please use a different username"
                });
            } else{
                checkEmail()
            }
        });
    }

    function checkEmail(){
        User.findOne({ email: req.body.email }, (err, userWithSameEmail) => {
            if(err){
                console.log(err);
                return res.status(400).json({
                    message: "Cannot find email"
                });
            } else if(userWithSameEmail){
                return res.status(400).json({ 
                    message: "This email is taken. Please use a different email"
                });
            } else{
                verifyPassword()
            }
        });
    }

    function verifyPassword(){
        if (req.body.password !== req.body.verifyPassword) {
          res.status(400).json({
            message: "Passwords don't match"
          });
        } else {
            newUser
            .save()
            .then(user => res.status(200).json(user))
            .catch(err => console.log(err));
        }
    }
}