const axios = require("axios");

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Express Weather Finder by Johnny Lieu"
    });
}

exports.getWeather = (req, res) => {
    const city = req.body.city;
    const API_KEY = "8f775258afdec054195f89c38855f678";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    axios.get(url).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}