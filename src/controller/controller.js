exports.renderHomePage = (req, res) => {
    res.render("index", {
        title: "Express Weather Finder by Johnny Lieu"
    });
};

exports.renderAboutPage = (req, res) => {
    res.render("about")
};