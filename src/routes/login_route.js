const express = require('express');
const router = express.Router();
const connection = require ('../config/db');
const user_login =require('../controllers/login_controller');
router.post('/signup',user_login.new_user);
router.get('/login',user_login.login_here);

module.exports = router;