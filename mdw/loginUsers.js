md5 = require('md5')
var users = [
    { username: "gnuyen huu ly", password: "12345" }
]
module.exports = {
    checklogin: function(req, res, next) {
        const username = req.body.username
        const password = req.body.password
        const md5password = md5(password)
        if (password != users[i].password)

            next();
    }
}