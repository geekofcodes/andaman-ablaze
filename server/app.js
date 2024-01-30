const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; // You can choose any available port

// Serve static files from the 'build' folder (assuming your React build output is in a folder named 'build')
app.use(express.static(path.join(__dirname, 'build')));

// Define a route to handle requests and serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
