const express = require("express");
const app = express();
const CORS = require("cors");
const PORT = process.env.PORT || 5500;

const users = [
    { id: 1, name: "random1", email: "random1@gmail.com" },
    { id: 2, name: "random2", email: "random2@gmail.com" },
    { id: 3, name: "random3", email: "random3@gmail.com" }
];

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

app.post("/users", (req, res) => {
    console.log("Post API called");

    // getting POST requested data
    const user = req.body;
    user.id = users.length + 1;
    // adding to users array
    users.push(user);
    console.log(user);
    res.send(user);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
