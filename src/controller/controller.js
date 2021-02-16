const axios = require("axios");

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Weather Finder"
    });
}

exports.getWeather = (req, res) => {
    const city = req.body.city;
    const API_KEY = "8f775258afdec054195f89c38855f678";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    axios.get(url).then((response) => {
        console.log(response);
        res.render("index", {
            temp: `The current temperature in ${response.data.name} is ${response.data.main.temp}.
            Humidity is ${response.data.main.humidity}.
            The minium temp for today is ${response.data.main.temp_min} & the maximum temp for today is ${response.data.main.temp_max}.`
        });
    }).catch((error) => {
        console.log(error);
    });
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}