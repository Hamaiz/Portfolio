//Navbar
let body = document.querySelector(".page")
const menuToggle = document.querySelector(".menu_toggle")
const content = document.querySelector(".main")

menuToggle.addEventListener("click", () => {
    body.classList.toggle("shazam")
})
content.addEventListener("click", () => {
    body.classList.remove('shazam')
})


//Mouse Cursor
let mouseCursor = document.querySelector(".cursor")
let navList = document.querySelectorAll(".nav_list li a")
let buttons = document.querySelectorAll(".buttons a")
let rectangle = document.querySelector(".rectangle")
let contactInfo = document.querySelector(".contact-info_wrap")
let socialIcons = document.querySelectorAll(".footer_social-icons a i")
let jsHover = document.querySelectorAll(".js-hover a")
let inputBox = document.querySelector("#name")
let inputBox2 = document.querySelector("#email")
let textBox = document.querySelector("textarea")
let buttonContact = document.querySelector("button")
// let isMobile = window.matchMedia("only screen and (max-width: 991px)")

// if (isMobile.matches === false) {
window.addEventListener("mousemove", cursor)
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}
// }
if (rectangle) {
    window.addEventListener("mousemove", ({ x, y }) => {
        const widthPage = window.innerWidth
        const heightPage = window.innerHeight

        const traX = (-(widthPage / 2) + x) / 30
        const traY = ((heightPage / 2) - y) / 30

        rectangle.style.transform = `rotateY(${traX}deg) rotateX(${traY}deg) translateZ(-150px)`
    })
}
if (contactInfo) {
    window.addEventListener("mousemove", ({ x, y }) => {
        const widthPage = window.innerWidth
        const heightPage = window.innerHeight

        const traX = (-(widthPage / 2) + x) / 120
        const traY = ((heightPage / 2) - y) / 120

        contactInfo.style.transform = `rotateY(${traX}deg) rotateX(${traY}deg) translateZ(-150px)`
    })
}
navList.forEach(link => {
    link.addEventListener("mouseleave", _ => {
        mouseCursor.classList.remove("link-grow")
    })
    link.addEventListener("mouseover", _ => {
        mouseCursor.classList.add("link-grow")
    })
});
buttons.forEach(btn => {
    btn.addEventListener("mouseleave", _ => {
        mouseCursor.classList.remove("link-grow")
    })
    btn.addEventListener("mouseover", _ => {
        mouseCursor.classList.add("link-grow")
    })
});
socialIcons.forEach(btn => {
    btn.addEventListener("mouseleave", _ => {
        mouseCursor.classList.remove("link-grow")
    })
    btn.addEventListener("mouseover", _ => {
        mouseCursor.classList.add("link-grow")
    })

});
jsHover.forEach(btn => {
    btn.addEventListener("mouseleave", _ => {
        mouseCursor.classList.remove("link-grow")
    })
    btn.addEventListener("mouseover", _ => {
        mouseCursor.classList.add("link-grow")
    })

});


//About Swiper Js
const swiper = new Swiper(".about-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    noSwiping: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    mousewheel: true,
    pagination: {
        el: ".about-slider_pagination",
        clickable: true
    }
})


//Mouse Hover
if (inputBox) {
    inputBox.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
    inputBox.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    inputBox2.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
    inputBox2.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    textBox.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
    textBox.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
    buttonContact.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow")
    })
    buttonContact.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow")
    })
}
//Navbar
// const page = document.querySelector("#body")
// const menuToggle = document.querySelector(".menu_toggle")
// const content = document.querySelector(".main")

// menuToggle.addEventListener("click", () => {
//     page.classList.toggle("shazam")
// })
// content.addEventListener("click", () => {
//     page.classList.remove('shazam')
// })

//Mobile Issue
// const mobileHelp = document.getElementById("mobile_help")
// var disp = mobileHelp.style.display
// if (disp === "none" || disp === "") {
// console.log("This")
// }


