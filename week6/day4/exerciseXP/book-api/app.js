const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});