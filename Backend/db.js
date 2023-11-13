const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://abishekitta:urlmongo@cluster.mongodb.net/test?ssl=true&sslCAPath=path/to/ca.pem&sslKeyPath=path/to/key.pem&sslCertPath=path/to/cert.pem', {
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
