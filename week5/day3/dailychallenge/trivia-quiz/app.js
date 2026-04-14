const express = require('express');
const app = express();

const quizRoutes = require('./routes/quiz');

// Middleware to read form data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use quiz routes
app.use('/quiz', quizRoutes);

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Trivia Quiz Game</h1>
    <p>Click below to start the quiz:</p>
    <a href="/quiz">Start Quiz</a>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});