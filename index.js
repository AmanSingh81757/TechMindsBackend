require('dotenv').config();
const cors = require('cors')
const express = require('express')

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
