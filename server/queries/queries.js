const accounts = {
    insertNewUser: 'INSERT INTO users_table (user_id, user_email, user_password) VALUES (?,?,?)',
    checkUser: 'SELECT * FROM users_table WHERE user_email = ?',
    selectUser: 'SELECT * FROM users_table WHERE user_id = ?',
}

//test authenticate 

const test = {
    selectContent: 'SELECT * FROM user_content',
}

const queries = {
    accounts,
    test
}

module.exports = queries;