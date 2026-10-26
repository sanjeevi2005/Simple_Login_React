const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const user = "sanjeevi";
const pass = "123456";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    if (req.body.username === user && req.body.password === pass) {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen("5000", () => {
    console.log("Server Started...");
});
