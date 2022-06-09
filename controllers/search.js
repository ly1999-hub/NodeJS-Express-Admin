function search(req, res) {

    var name = req.query.name;
    var matchedUsers = user.filter(function(user) {
        return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    })

    return matchedUsers;
}