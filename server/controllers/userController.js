const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register a user
const registerUser = async (req, res) => {
  
  // Need to implement validations

  const newUser = new User(req.body);
  console.log(newUser);
  try {
    await newUser.save();
    res.status(200).json({ message: 'User created!' });
    console.log('User created!');
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) return res.status(404).json('Incorrect Email or Password');

    // validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json('Incorrect Email or Password');

      const sessUser = { id: user.id, email: user.email };
      req.session.user = sessUser;
      res.json(sessUser);
    });
  });
};

// Get user by id
const getUserById = (req, res) => {
  const { id } = req.params.id;
  User.findById({ id }), (err, user) => {
    if (err){
      res.status(500).json('Cannot find user');
    }
    res.status(200).json(user);
  };
};

// Update user
const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(todo);
    }
  );
};

// Logout
const logout = async (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
};

// Delete user
const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json('Error. Not able to delete user');
    }
    res.status(200).json({ message: 'User deleted successfully'});
  });
};

module.exports = { registerUser, loginUser, getUserById, updateUser, logout, deleteUser };

