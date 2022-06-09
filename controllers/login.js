var up = [
    { username: "nguyen huu ly", password: "827ccb0eea8a706c4c34a16891f84e7b" }
]
var md5 = require('md5')
module.exports = {
    getLogin: function(req, res) {
        res.render("../views/login.pug")
    },
    postLogin: function(req, res) {
        var login = req.body
        var errs = [];

        function isCherries(fruit) {
            return fruit.username === login.username;
        }
        var use = up.find(isCherries)
        if (!use) {
            res.render("../views/login", {
                errs: ["use no requied"],
                values: req.body
            })
            return;
        }
        mdpas = md5(login.password)
        if (mdpas != use.password) {
            res.render("../views/login", {
                errs: ["password is err"],
                values: req.body
            })
            return;
        }
        res.cookie("cookie", req.body.username)
        res.redirect("/users")
    }
}