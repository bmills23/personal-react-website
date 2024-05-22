const express = require('express');
const app = express();
const port = 5000;

const directory = './client/public';

app.get('/', (req, res) => {
    res.sendFile(directory + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});