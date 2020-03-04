//Mouse Cursor
let mouseCursor = document.querySelector(".cursor")
let navList = document.querySelectorAll(".nav_list li a")
let buttons = document.querySelectorAll(".buttons a")
let socialIcons = document.querySelectorAll(".footer_social-icons a i")

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