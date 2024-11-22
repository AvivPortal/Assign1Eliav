const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World! hey there');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

