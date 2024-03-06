

const login = (req, res) => {
  const data = req.body;
  console.log(data);
}

const signUp = (req, res) => {

}

const accounts = {
    login,
    signUp
}

module.exports = accounts;