const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

port = 3000

app.get("/", (req, res) => {
res.send("my first express web page")
});

app.get("/about", (req, res) => {
    res.send("my business is so cool!!")
});

app.listen(port, () => {
    console.log("the server is now running on port " + port)
});