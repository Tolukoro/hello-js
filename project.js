const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World from expresss!'));

app.post('/', (req, res) => {
  const {name, email} = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });
  // Here you would normally save the user to a database
  res.status(201).json({ message: `User registered successfully: ${name} (${email})` });
});

app.get('/user/:userId', (req, res) => {
  res.json({ userId: req.params.userId, name: 'Sample User' });
});

app.listen(3000, () => console.log('Server is running on port 3000'));