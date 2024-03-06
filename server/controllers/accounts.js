

const login = (req, res) => {
  const data = req.body;
  console.log(data);
}

const signUp = (req, res) => {
    const data = req.body;
    console.log(data);

    const email = data.email;

    try {
        
    }catch(error) {
        res.json({success: false, message: 'Error occurred'});
        throw error;
        
    }
}

const accounts = {
    login,
    signUp
}

module.exports = accounts;