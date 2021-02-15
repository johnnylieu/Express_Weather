const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

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