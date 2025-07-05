/**
 * server.js
 * Minimal Express server to serve the Travelers Tools app.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

// Serve everything in /src as static assets
const publicPath = path.join(__dirname, 'src');
app.use(express.static(publicPath));

// Fallback: for any missing route, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Travelers Tools running on port ${PORT}`);
});
