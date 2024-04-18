const express = require("express");
const app = express();
const fs = require('fs')
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');

console.log("MONGO_URL:", process.env.MONGO_URL);
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

const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: Date,
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
})


const blackcoffer = mongoose.model('blackcoffer', dataSchema);

mongoose.connect(process.env.MONGO_URL , {dbName: "blackcoffer" });


app.post("/City ", async (req, res) => {
    const city = String(req.query.city);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ city: city });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/Region", async (req, res) => {
    const region = String(req.query.region);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ region: region });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Topics", async (req, res) => {
    const topic = String(req.query.topic);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ topic: topic });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Country", async (req, res) => {
    const country = String(req.query.country);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ country: country });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Year", async (req, res) => {
    const topic = String(req.query.topic);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ topic: topic });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Relevance", async (req, res) => {
    const relevance = String(req.query.relevance);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ relevance: relevance });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Likelihood", async (req, res) => {
    const likelihood = String(req.query.likelihood);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ likelihood: likelihood });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/Intensity", async (req, res) => {
    const likelihood = String(req.query.likelihood);
    // console.log('Received request for ID:', id);

    try {
        const data = await blackcoffer.find({ likelihood: likelihood });
        console.log('Retrieved person:', data);

        if (data) {
            res.json(data);
        } else {
            res.status(404).send("Person not found.");
        }
    } catch (error) {
        console.error('Error in retrieving person:', error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});