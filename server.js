if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}


// Imports
const sslRedirect = require('heroku-ssl-redirect')
const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const path = require("path")
const flash = require("express-flash")
var session = require('express-session')


//Routes Imports
const homeRouter = require("./routes/home")
const aboutRouter = require("./routes/about")
const contactRouter = require("./routes/contact")
const nm_dependencies = ["swiper", "bootstrap-css-only", "@fortawesome", "gsap", "bootstrap.native"]


//Middlewares
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
nm_dependencies.forEach(dep => {
    app.use(`/${dep}`, express.static(path.resolve(`node_modules/${dep}/`)))
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(sslRedirect())
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 6000000,
        // secure: true,
    }
}))

//Global var
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    next()
})


//Routes Middlewares
app.use("/", homeRouter)
app.use("/about", aboutRouter)
app.use("/contact", contactRouter)


app.listen(process.env.PORT || 4000, () => console.log("Server has started...."))