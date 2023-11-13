const mongoose = require('mongoose');
//cont uri ='mongodb+srv://abishekitta:urlmongo@cluster0.5i29hlk.mongodb.net/'
const uri = 'mongodb+srv://abishekitta:urlmongo@cluster0.5i29hlk.mongodb.net/test?ssl=true';
mongoose.connect(uri, {
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
