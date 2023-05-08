const express = require('express');
const app = express();

// Import the routes
const routes = require('./routes/users');

// Set up routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});