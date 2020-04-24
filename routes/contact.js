const router = require("express").Router()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { check, validationResult } = require("express-validator")
const nodemailer = require("nodemailer")

//GET
router.get("/", (req, res) => {
    const name = ""
    const email = ""
    const message = ""

    res.render("contact/index", {
        title: "Contact",
        textColor: "header_color_1",
        mainStyle: "main_three",
        pageName: "contact",
        name,
        email,
        message
    })
})

//POST
router.post("/", [
    check("name", "Please write your name").notEmpty(),
    check("email", "Please write an Email").isEmail(),
    check("message", "Message is required").notEmpty()
], (req, res) => {
    const { name, email, message } = req.body

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        let errorsArray = []

        errors.errors.forEach(element => {
            errorsArray.push({ msg: element.msg })
        });

        res.render("contact/index", {
            title: "Contact",
            textColor: "header_color_1",
            mainStyle: "main_three",
            pageName: "contact",
            errors: errorsArray,
            name,
            email,
            message
        })

    } else {
        const output = `
                <table width="100%" border="0" cellspacing="0" cellpadding="0"
            style="width:100%!important;line-height: 1.4;color: #00394d;">
            <tr>
                <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="40"
                        style="border:1px solid #eaeaea;border-radius:5px;margin:40px 0;text-align:center">
                        <tr>
                            <td align="center">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="100%">
                                            <table align="center" width="570" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding:10px 35px;">
                                                        <h1 style="color: #004d66;">
                                                            ${name}
                                                        </h1>
                                                        <h2 style="color: #007399;">
                                                            ${email}
                                                        </h2>
                                                        <h3 style="color: #00ace6;">
                                                            ${message}
                                                        </h3>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        `

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GM_EMAIL,
                pass: process.env.GM_PASSWORD
            }
        });

        transporter.sendMail({
            from: `"Portfolio" <${process.env.GM_EMAIL}>`,
            to: process.env.GM_EMAIL,
            subject: "Portfolio Contact",
            html: output
        })


        req.flash("success_msg", "Your message has been send. I'll contact you shortly")
        res.redirect("/contact")

        //     const msg = {
        //         to: process.env.GM_EMAIL,
        //         from: `Portfolio <${process.env.GM_EMAIL}>`,
        //         subject: "Contact Portfolio",
        //         html: `
        //         <table width="100%" border="0" cellspacing="0" cellpadding="0"
        //     style="width:100%!important;line-height: 1.4;color: #00394d;">
        //     <tr>
        //         <td align="center">
        //             <table width="600" border="0" cellspacing="0" cellpadding="40"
        //                 style="border:1px solid #eaeaea;border-radius:5px;margin:40px 0;text-align:center">
        //                 <tr>
        //                     <td align="center">
        //                         <table width="100%" cellpadding="0" cellspacing="0">
        //                             <tr>
        //                                 <td width="100%">
        //                                     <table align="center" width="570" cellpadding="0" cellspacing="0" border="0">
        //                                         <tr>
        //                                             <td style="padding:10px 35px;">
        //                                                 <h1 style="color: #004d66;">
        //                                                     ${name}
        //                                                 </h1>
        //                                                 <h2 style="color: #007399;">
        //                                                     ${email}
        //                                                 </h2>
        //                                                 <h3 style="color: #00ace6;">
        //                                                     ${message}
        //                                                 </h3>
        //                                             </td>
        //                                         </tr>
        //                                     </table>
        //                                 </td>
        //                             </tr>
        //                         </table>
        //                     </td>
        //                 </tr>
        //             </table>
        //         </td>
        //     </tr>
        // </table>
        // `
        //     }
        //     // sgMail.send(msg)
        //     sgMail
        //         .send(msg)
        //         .then(() => {
        //             req.flash("success_msg", "Your message has been send. I'll contact you shortly")
        //             res.redirect('/contact');
        //             console.log(req.flash())
        //         }, error => {
        //             console.log(error)
        //             if (error.response) {

        //                 const errorMessages = [{ msg: "There was an error sending the message. Please try again" }]
        //                 res.render("contact/index", {
        //                     title: "Contact",
        //                     textColor: "header_color_2",
        //                     mainStyle: "main_three",
        //                     pageName: "contact",
        //                     errors: errorMessages,
        //                     name,
        //                     email,
        //                     message
        //                 })
        //             }
        //         });
    }
})

module.exports = router