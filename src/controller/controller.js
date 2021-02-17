const axios = require("axios");

const Weather = require("../model/Weather");

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Weather Finder"
    });
}

exports.getWeather = (req, res) => {
    const city = req.body.city;
    const API_KEY = "8f775258afdec054195f89c38855f678";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

    const weather = new Weather(req.body.city);
    weather.validateUserInput();

    if (weather.errors.length) {
        res.render("index", {
            title: "Weather Finder",
            error: weather.errors.toString()
        })
    } else {
        axios.get(url).then((response) => {
            console.log(response);
            const {temp: temperature} = response.data.main;
            const {name: location} = response.data;
            const {humidity: humidity} = response.data.main;
            res.render("index", {
                title: "Weather Finder",
                temp: `The current temperature in ${location} is ${temperature}°F.`,
                hum: `Humidity is ${humidity}.`,
                min: `The minimum temp for today is ${response.data.main.temp_min}°F & the maximum temp for today is ${response.data.main.temp_max}°F.`
            });
        }).catch((error) => {
            console.log(error);
        });
    }
    };

exports.renderAboutPage = (req, res) => {
    res.render("about")
}