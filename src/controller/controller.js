const API_KEY = "8f775258afdec054195f89c38855f678";

exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Express Weather Finder by Johnny Lieu"
    });
}

exports.getWeather = (req, res) => {
    console.log(req);
    res.send(`You entered ${req.body.city}.`);
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}