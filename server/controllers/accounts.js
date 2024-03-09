const pool = require("../config/Db");
const queries = require("../queries/queries");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'})


const login = async(req, res) => {
  const data = req.body;

  const email = data.userDetail;
  const password = data.password;

  try{
    const [findUser] = await pool.query(queries.accounts.checkUser, email);
    // console.log('findUserlogin',findUser);
    if(findUser.length === 0) {
       
        return res.json({success: false, message: 'Email does not exist, please sign up'});
    }else {
        if(password !== findUser[0].user_password) {
            return res.json({success: false, message: 'password does not match'});
        }else {
            const id = findUser[0].user_id;
            const token = generateToken(id);

            const user = {
                id: id,
                token: token
            }
            console.log(user);
            return res.json({success: true, message: 'Login Success'});
        }
    }
  }catch(error) {
    res.json({success: false, message: 'Server Error'})
    throw error;
  }

}

const signUp = async(req, res) => {
    const data = req.body;

    const email = data.userDetail;
    const password = data.password;

    try {
        const [findUser] = await pool.query(queries.accounts.checkUser, email);
        console.log('findUser',findUser);

        if(findUser.length > 0) {
            return res.json({success: true, message: 'Email already exist, please try to  sign in'})
        }else {
            const id = new Date().getTime();
            await pool.query(queries.accounts.insertNewUser, [id, email, password])
        }
    }catch(error) {
        res.json({success: false, message: 'Error occurred'});
        throw error;
        
    }
}

//generate token 

const generateToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

const accounts = {
    login,
    signUp
}

module.exports = accounts;