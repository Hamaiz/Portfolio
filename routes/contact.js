const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("contact/index", {
        title: "Contact",
        textColor: "header_color_2",
        mainStyle: "main_three",
        pageName: "contact"
    })
})

module.exports = router