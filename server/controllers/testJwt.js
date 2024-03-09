const pool = require('../config/Db');
const queries = require('../queries/queries');

const testInfo = async (req, res) => {
    try{
        const [contentData] = await pool.query(queries.test.selectContent);
        res.json({success: true, contentData});
    }catch(error) {
        console.log(error)
        res.json({success: false, message: 'server error occured'});
        throw error;
    }
}

module.exports = testInfo;