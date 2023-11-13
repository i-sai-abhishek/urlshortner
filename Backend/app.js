const db = require('./db');
const User = require('./userModel');

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000; // Use the provided PORT variable or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World! URL Shortner site under construction');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/url/add', async (req, res) => {
  const { URL } = req.body;
    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }
  const  ShortURL = makeid(4);
  console.log(ShortURL);

  try {
    const newUser = new User({ URL,ShortURL });
    await newUser.save();
    res.status(201).json({ message: 'URL added successfully' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'URL already exists' });
    }
    res.status(400).json({ message: 'Invalid email or password' });
  }
});

app.get('/shorturl/:urlkey', async (req, res) => {
  ShortURL =req.params.urlkey;
  try {
    const users = await User.findOne({ShortURL});
    res.status(200).json(users.URL);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});
