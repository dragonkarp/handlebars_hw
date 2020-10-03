const express = require("express")
const exphbrs = require("express-handlebars")

const app = express()

const PORT = process.env.PORT || 3000

app.engine("handlebars", exphbrs({defaultLayout : "main"}))
app.set("view engine", "handlebars")

app.use(express.urlencoded({extended : true}))
app.use(express.json())

const controller = require("./controller/burgerController.js")
app.use(controller)

app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT)
})