const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post!' },
  { id: 2, title: 'Second Post', content: 'This is my second blog post!' },
  { id: 3, title: 'Third Post', content: 'This is my third blog post!' },
];

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET a single post by ID
app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
});

// POST - Create a new post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT - Update a post
app.put('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;

  res.json(post);
});

// DELETE - Delete a post
app.delete('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  posts.splice(index, 1);
  res.json({ message: 'Post deleted successfully' });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ app.listen ALWAYS last
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});