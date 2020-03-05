//Mouse Cursor
let mouseCursor = document.querySelector(".cursor")
let navList = document.querySelectorAll(".nav_list li a")
let buttons = document.querySelectorAll(".buttons a")
let rectangle = document.querySelector(".rectangle")
let socialIcons = document.querySelectorAll(".footer_social-icons a i")
let jsHover = document.querySelectorAll(".js-hover a")


window.addEventListener("mousemove", cursor)
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

window.addEventListener("mousemove", ({ x, y }) => {
    const widthPage = window.innerWidth
    const heightPage = window.innerHeight

    const traX = (-(widthPage / 2) + x) / 30
    const traY = ((heightPage / 2) - y) / 30

    rectangle.style.transform = `rotateY(${traX}deg) rotateX(${traY}deg) translateZ(-150px)`
})

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