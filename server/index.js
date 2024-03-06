const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');
const { pool } = require('./config/Db');
dotenv.config();



app.use(cors({origin: 'exp://192.168.0.104:8081'}));
app.use(express.json());

app.use('/', router)

const port = process.env.PORT;



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});