/*const mongoose = require('mongoose');
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

*/


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://abishekitta:urlmongo@cluster0.5i29hlk.mongodb.net/?retryWrites=true&w=majority&ssl=true";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

