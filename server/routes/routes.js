const express = require('express');
const accounts = require('../controllers/accounts');
const protect = require('../middleware/authMiddleware');
const testInfo = require('../controllers/testJwt');
const router = express.Router();



//login apis
router.post('/api/signInUser', accounts.login);
router.post('/api/signUpUser', accounts.signUp);

router.get('/api/testInfo', protect , testInfo);


module.exports = router;