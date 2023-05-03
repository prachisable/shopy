const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51N173ySBdtHp5FkQ9Pi3kOVVTrZMg1U1jdGAWNZQhiJOcWJ7gkeYBqpdmdMGIesZhC7zjZjz7rTfvN88EiV5bPUT00ANwhrXd9');

// App 


// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

//Listen command
exports.api = functions.https.onRequest(app)


