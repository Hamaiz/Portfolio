if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

// Imports
const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

//Routes Imports
const homeRouter = require("./routes/home")
const aboutRouter = require("./routes/about")

//Middlewares
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))


//Routes Middlewares
app.use("/", homeRouter)
app.use("/about", aboutRouter)


app.listen(process.env.PORT || 4000, () => console.log("Server has started...."))