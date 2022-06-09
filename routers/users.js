const express = require('express')
const router = express.Router()
var usersController = require("../controllers/users")
var loginController = require("../controllers/login")
router.get("/", usersController.getAllUsers)
router.get("/search", usersController.search)
router.get("/user/:id", usersController.getById)
router.get("/create", usersController.getCreate)
router.get("/login", loginController.getLogin)

router.post("/create", usersController.postCreate)
router.post("/login", loginController.postLogin)

module.exports = router