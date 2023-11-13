const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abishekitta:urlmongo@cluster0.5i29hlk.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to urlshortner MongoDB');
});

module.exports = db;
