const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello All"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

