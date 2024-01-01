const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5500;
// id: , pass: 
const uri = "mongodb+srv://dbuser1:<password>@cluster0.hpwkhe3.mongodb.net/?retryWrites=true&w=majority";

app.get(cors());
app.get(express.json());

async function run() {}

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello 2024");
});

app.listen(port, (req, res) => {
    console.log(`We're in port ${port}, http://localhost:${port}/`);
});
