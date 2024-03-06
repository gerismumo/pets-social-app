const accounts = {
    insertNewUser: 'INSERT INTO users_table (user_id, user_email, user_password) VALUES (?,?,?)',
    checkUser: 'SELECT * FROM users_table WHERE user_email = ?',
}

const queries = {
    accounts
}

module.exports = queries;