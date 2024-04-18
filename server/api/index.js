const express = require("express");
const app = express();
const fs = require('fs')
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT
const URL = process.env.URL
app.use(cors(
    {
            origin: [URL],
            methods: ["POST", "GET"],
            credentials: true
          }
));
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(express.json());


app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});