const express = require('express');
const router = express.Router();

// Hard-coded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Simple variables to track the game
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz
// Start the quiz and display the first question
router.get('/', (req, res) => {
  // Reset the game whenever user starts again
  currentQuestionIndex = 0;
  score = 0;

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  res.send(`
    <h1>Trivia Quiz</h1>
    <h2>Question 1:</h2>
    <p>${currentQuestion.question}</p>

    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit Answer</button>
    </form>
  `);
});

// POST /quiz
// Submit answer and move to next question
router.post('/', (req, res) => {
  const userAnswer = req.body.answer.trim().toLowerCase();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  let feedback = '';

  if (userAnswer === correctAnswer) {
    score++;
    feedback = `<p style="color:green;">Correct!</p>`;
  } else {
    feedback = `
      <p style="color:red;">
        Incorrect! The correct answer was: ${triviaQuestions[currentQuestionIndex].answer}
      </p>
    `;
  }

  currentQuestionIndex++;

  // If there are still questions left
  if (currentQuestionIndex < triviaQuestions.length) {
    const nextQuestion = triviaQuestions[currentQuestionIndex];

    res.send(`
      <h1>Trivia Quiz</h1>
      ${feedback}
      <h2>Question ${currentQuestionIndex + 1}:</h2>
      <p>${nextQuestion.question}</p>

      <form method="POST" action="/quiz">
        <input type="text" name="answer" placeholder="Your answer" required />
        <button type="submit">Submit Answer</button>
      </form>
    `);
  } else {
    // If quiz is finished, redirect to score page
    res.send(`
      <h1>Quiz Finished!</h1>
      ${feedback}
      <p>You have completed the quiz.</p>
      <a href="/quiz/score">View Final Score</a>
    `);
  }
});

// GET /quiz/score
// Display final score
router.get('/score', (req, res) => {
  res.send(`
    <h1>Your Final Score</h1>
    <p>You scored ${score} out of ${triviaQuestions.length}</p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;