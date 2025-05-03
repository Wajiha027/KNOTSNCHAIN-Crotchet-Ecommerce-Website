const express = require('express');
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// Correct route definitions
router.post('/login', authUser);
router.route('/')
  .post(registerUser);
  console.log(getUserProfile);  // Add this to check if the function is correctly imported


module.exports = router;
