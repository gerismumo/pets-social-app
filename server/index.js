const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/routes');
dotenv.config();



app.use(cors());
app.use(express.json());

app.use('/', router)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});