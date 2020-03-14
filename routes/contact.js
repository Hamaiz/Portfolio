const router = require("express").Router()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get("/", (req, res) => {

    res.render("contact/index", {
        title: "Contact",
        textColor: "header_color_2",
        mainStyle: "main_three",
        pageName: "contact"
    })
})
router.post("/", (req, res) => {
    const { name, email, message } = req.body
    let emailSend = process.env.GM_EMAIL

    const msg = {
        to: emailSend,
        from: `Portfolio <workingeveryday2@gmail>`,
        subject: "Contact Portfolio",
        html: `
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
    }
    sgMail.send(msg)
    sgMail.send(msg).then(_ => {
        res.redirect('/contact');
    }).catch((error) => {
        console.log('error', error);
    });


    // (async () => {
    // try {
    // await sgMail.send(msg);
    // res.redirect("/contact")
    // } catch (err) {
    // console.error(err.toString());
    // }
    // })();

    // res.redirect("contact")
})

module.exports = router