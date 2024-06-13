// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/comments', (req, res) => {
  res.json({ comments: [{ id: 1, body: 'comment 1' }, { id: 2, body: 'comment 2' }] });
});

app.post('/api/comments', (req, res) => {
  console.log('Comment created:', req.body);
  res.status(201).json({ comment: req.body });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
