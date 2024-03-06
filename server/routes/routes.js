const express = require('express');
const accounts = require('../controllers/accounts');
const router = express.Router();

//login apis

router.post('/api/signInUser', accounts.login);

module.exports = router;