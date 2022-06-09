const express = require('express')
var cookeparse = require('cookie-parser')
const app = express()
const port = 3000
var userRouter = require("./routers/users.js")
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookeparse())

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(express.static("public"))

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})