const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});
const pool= require('../config/Db');
const queries = require('../queries/queries');

const protect = async(req, res, next) => {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            console.log('token',token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('decoded',decoded);
            const [User] = await pool.query(queries.accounts.selectUser, decoded.id);
            // console.log('User',User);
            req.user = User[0].user_id;
            next();
        }catch (error) {
            console.log('middle ware error',error.message)
            res.json({success: false, error: 'Please login first'});
        }
    }
}

module.exports = protect;