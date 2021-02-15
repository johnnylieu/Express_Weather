const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Express Weather Finder by Johnny Lieu"
    })
});

router.get("/about", (req, res) => {
    res.render("about")
});

module.exports = router;