
const testInfo = (req, res) => {
    console.log('test jwt',req.user);
    res.send('user authenticated');
}

module.exports = testInfo;