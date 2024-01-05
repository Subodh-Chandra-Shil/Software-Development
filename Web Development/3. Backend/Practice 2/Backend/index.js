const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;

// mongo user: dbuser1, password: b0WOSwGO5evj2MHD

const uri = "mongodb+srv://dbuser1:b0WOSwGO5evj2MHD@cluster0.hpwkhe3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

app.get(cors());
app.get(express.json());

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');

        // manual testing object
        const demoUser = {
            name: 'tester', email: 'tester@testmail.com'
        };

        const result = await userCollection.insertOne(demoUser);
    }
    finally {
        
    }
}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello 2024");
});

app.listen(port, (req, res) => {
    console.log(`We're in port ${port}, http://localhost:${port}/`);
});
