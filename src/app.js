const express = require("express");
const app = express();
const router = require("./router")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

app.use("/", router);

port = 3000

app.listen(port, () => {
    console.log("the server is now running on port " + port)
});