const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();

app.use(express.json());

const PORT = 4001;

// GET /posts - fetch data from JSONPlaceholder
app.get('/posts', async (req, res) => {
  const posts = await fetchPosts();
  console.log('Data successfully retrieved and sent as response!');
  res.json(posts);
});

// ✅ ALWAYS LAST
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});