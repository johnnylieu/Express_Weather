exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Express Weather Finder by Johnny Lieu"
    });
}

exports.getWeather = (req, res) => {
    res.send("your form has been submitted");
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}