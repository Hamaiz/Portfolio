//Mouse Cursor
let mouseCursor = document.querySelector(".cursor")
let navList = document.querySelectorAll(".nav_list li a")
let buttons = document.querySelectorAll(".buttons a")
let socialIcons = document.querySelectorAll(".footer_social-icons a i")
let bullets = document.querySelectorAll(".swiper-pagination-bullet")
// let bullets = document.querySelectorAll(".about-slider_pagination span")

window.addEventListener("mousemove", cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
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
// const bullets = bulletss.childNodes[0]
console.log(bullets);

// bullets.forEach(bullet => {
//     console.log(bullet);
//     bullet.addEventListener("mouseleave", _ => {
//         mouseCursor.classList.remove("link-grow")
//     })
//     bullet.addEventListener("mouseover", _ => {
//         mouseCursor.classList.add("link-grow")
//     })
// });

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