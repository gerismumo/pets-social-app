const express = require('express');
const accounts = require('../controllers/accounts');
const router = express.Router();

//login apis

router.post('/signInUser', accounts.login);

module.exports = router;