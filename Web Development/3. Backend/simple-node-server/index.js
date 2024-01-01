const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const CORS = require("cors");
const PORT = process.env.PORT || 5500;

const users = [
    { id: 1, name: "random1", email: "random1@gmail.com" },
    { id: 2, name: "random2", email: "random2@gmail.com" },
    { id: 3, name: "random3", email: "random3@gmail.com" }
];

// mongo user: dbuser1, password: b0WOSwGO5evj2MHD
const uri =
    "mongodb+srv://dbuser1:b0WOSwGO5evj2MHD@cluster0.hpwkhe3.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function run() {
    try {
        const userCollection = client.db("newNode").collection("users");
        // const user = { name: "testUser", email: "test@gmail.com" };
        // const result = await userCollection.insertOne(user);
        console.log(result);

        app.post("/users", async (req, res) => {
            console.log("Post API called");

            // getting POST requested data
            const user = req.body;

            // adding to users array
            // users.push(user);
            // console.log(user);

            /// push to the database
            const result = await userCollection.insertOne(user);
            user.id = result.insertedId;

            res.send(user);
        });
    } finally {
    }
}

/* async function run() {
    try {
        const userCollection = client.db("simpleNode").collection("users");
        const user = { name: "user2", email: "user2@gmail.com" };
        // const result = await userCollection.insertOne(user);
        // console.log(result);

        app.post("/users", async (req, res) => {
            console.log("Post API called");

            // getting POST requested data
            const user = req.body;

            // adding to the mongodb
            const result = await userCollection.insertOne(user);
            user.id = result.insertedId;
            console.log(result);
            res.send(user);
        });
    } finally {
    }
}
 */

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(CORS());
app.use(express.json());

app.get("/users", (req, res) => {
    const search = req.query.name;
    if (search) {
        const filtered = users.filter(
            (user) => user.name.toLowerCase().indexOf(search) >= 0
        );

        res.send(filtered);
    } else {
        res.send(users);
    }

    console.log(req.query);
    res.send(users);
});

/* app.post("/users", (req, res) => {
    console.log("Post API called");

    // getting POST requested data
    const user = req.body;
    user.id = users.length + 1;
    // adding to users array
    users.push(user);
    console.log(user);
    res.send(user);
}); */

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
