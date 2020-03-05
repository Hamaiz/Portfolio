const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("about/index", {
        title: "About",
        textColor: "header_color_2",
        mainStyle: "main_two",
        pageName: "about"
    })
})

module.exports = router