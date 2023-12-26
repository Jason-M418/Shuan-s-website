//page routes
module.exports.rootRoute = (req, res) => {
    res.render('home', {title: "Home"});
}

module.exports.homeRoute = (req, res) => {
    res.render('home', {title: "Home"});
}

module.exports.aboutRoute = (req, res) => {
    res.render('about', {title: "About"});
}

module.exports.contactRoute = (req, res) => {
    res.render('contact', {title: "Contact Me"});
}