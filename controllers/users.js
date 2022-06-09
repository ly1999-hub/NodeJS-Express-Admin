var md5 = require('md5')
var users = [{
        id: "12345",
        name: "User1",
        email: "user1@gmail.com",
        age: 23
    },
    {
        id: "123456",
        name: "User2",
        email: "user2@gmail.com",
        age: 23
    }
]
module.exports = {
    getAllUsers: function(req, res) {
        res.cookie("user ", "12345")
        res.render('../views/users.pug', {
            users: users
        })
    },

    getById: function(req, res) {
        var id = req.params.id;
        var user = users.find(x => x.id === id)
        console.log(user.name)

        res.render("../views/user.pug", {
            users: user
        })

    },
    search: function(req, res) {
        var name = req.query.name;
        var matchedUsers = users.filter(function(users) {
            return users.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        })
        res.render("../views/users.pug", { users: matchedUsers })
    },

    getCreate: function(req, res) {
        res.render("../views/createUser.pug")
    },
    postCreate: function(req, res) {
        var newUsers = req.body
        newUsers.email = md5(newUsers.email)
        users.push(newUsers);
        console.log(users);
        res.redirect("/users")
    }
}