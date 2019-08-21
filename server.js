//requirements for the server file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//allows environment variables
require('dotenv').config();

//creates express server and defines port
const app = express();
const port = process.env.port || 5000;

//cors middleware
app.use(cors());

//cors middleware that allows us to parse json
app.use(express.json());

//database uri - get from mongodb dashboard
const uri = process.env.ATLAS_URI;

//could do above or const uri = "mongodb+srv://jameshuntt:bLT2ymh%21@golf-hqfhp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//starts connection to mongodb
const connection = mongoose.connection;

//opens connection and logs once it is open
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//require our routes
const usersRouter = require('./routes/api/users');

//use the routes
app.use('/users', usersRouter);


//starts server on our specified port
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})

//const MongoClient = require('mongodb').MongoClient;
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});


/*// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

(async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: 'T-shirt',
      description: 'Comfortable cotton t-shirt',
      images: ['https://example.com/t-shirt.png'],
      amount: 500,
      currency: 'usd',
      quantity: 1,
    }],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
})();
require('dotenv').config();*/