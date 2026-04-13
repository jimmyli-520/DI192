// 1. Import Express and create the app
const express = require("express");
const app = express();

// 2. Import posts data
const posts = require("./data");

// 3. Start the server on port 3000
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

// -------------------------------------------
// ROUTE 1: GET /api/posts
// Returns all blog posts as JSON
// Example: http://localhost:3000/api/posts
// -------------------------------------------
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// -------------------------------------------
// ROUTE 2: GET /api/posts/:postID
// Returns a single post by its ID (route parameter)
// Example: http://localhost:3000/api/posts/2
// -------------------------------------------
app.get("/api/posts/:postID", (req, res) => {
  // req.params.postID comes from the URL as a string, so convert to a number
  const postID = parseInt(req.params.postID);

  // Find the post whose id matches
  const post = posts.find((p) => p.id === postID);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// -------------------------------------------
// ROUTE 3: GET /api/search?title=
// Filters posts whose title contains the query string value
// Example: http://localhost:3000/api/search?title=express
// -------------------------------------------
app.get("/api/search", (req, res) => {
  // req.query.title comes from ?title=... in the URL
  const titleQuery = req.query.title ? req.query.title.toLowerCase() : "";

  const results = posts.filter((p) =>
    p.title.toLowerCase().includes(titleQuery)
  );

  if (results.length > 0) {
    res.json(results);
  } else {
    res.json({ message: "No posts found matching your search." });
  }
});