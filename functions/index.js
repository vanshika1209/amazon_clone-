
const functions = require('firebase-functions');

const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('pk_test_51MkE3nSBcqx1pTSxSTNBbeRGlsAF6VDirl6g5UFHyy5A7FipyFqtLEC4fI11c7jG1D1oMEhuHoUyUMLEjkaVNCOX00ELwsM3wD')

//API

//APP CONFIG
const app = expess();
//MIDDLEWARES
app.use(cors({origin:true}));
app.use(express.json());
//API ROUTES
app.get('/',(request, response) => response.status(200).send('hello world'))

//LISTEN COMMAND
exports.api = functions.https.onRequest(app)

//http://localhost:4000/challenge-69ceb/us-central/api





