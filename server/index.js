require('dotenv').config();

let folder = '../client/build';

console.log(folder);

const express = require('express');
const path = require('path');
const app = express();

// Serve API routes
// app.use('/api', require('./routes/api'));

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, folder)));

// For all other requests, send the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, folder, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, folder, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});