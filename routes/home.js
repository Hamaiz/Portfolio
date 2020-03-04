const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home/index", {
        title: "Home",
        textColor: "header_color_1",
        mainStyle: "main_one"
    })
})

module.exports = router