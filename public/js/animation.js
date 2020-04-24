let isMobilePhone = window.matchMedia("only screen and (min-width: 991px)").matches
const fpSection = document.querySelector(".fp-section")
const abSection = document.querySelector(".ab-section")
const coSection = document.querySelector(".co-section")

// ANIMATION
if (isMobilePhone === true && fpSection) {
    window.addEventListener("load", () => {
        setTimeout(() => {

            gsap.from(".header_text", {
                duration: 1.5,
                x: "-500px",
                ease: "power3.inOut"
            });

            gsap.from(".nav_list", {
                duration: 2.5,
                y: "-500px",
                ease: "elastic.out(1, 0.3)"
            })

            gsap.from(".footer_social-icons", {
                duration: 2.5,
                x: "500px",
                ease: "power3.inOut"
            })

            gsap.from(".project_section", {
                duration: 3.5,
                opacity: 0,
                ease: "expo.inOut"
            })

            gsap.from(".container1", {
                duration: 2.5,
                scale: 2,
                ease: "power2.inOut"
            })

        }, 1000);
    })
}

if (isMobilePhone === true && abSection) {
    window.addEventListener("load", () => {
        setTimeout(() => {

            gsap.from(".header_text", {
                duration: 1.5,
                x: "-500px",
                ease: "power3.inOut"
            });

            gsap.from(".nav_list", {
                duration: 2.5,
                y: "-500px",
                ease: "elastic.out(1, 0.3)"
            })

            gsap.from(".about-slider", {
                duration: 2,
                rotate: 180,
                ease: "back.out(1.5)"
            })

            gsap.from(".about_description", {
                duration: 2,
                x: 1000,
                ease: "circ.out"
            })

        }, 1000);
    })
}

if (isMobilePhone === true && coSection) {
    window.addEventListener("load", () => {
        setTimeout(() => {

            gsap.from(".header_text", {
                duration: 1.5,
                x: "-500px",
                ease: "power3.inOut"
            });

            gsap.from(".nav_list", {
                duration: 2.5,
                y: "-500px",
                ease: "elastic.out(1, 0.3)"
            })

            gsap.from(".contact-form", {
                duration: 3,
                scale: 0.5,
                y: 500,
                ease: "power4.out"
            })

            gsap.from(".contact-info_wrap", {
                duration: 2,
                scale: 0,
                ease: "power3.out)"
            })

        }, 1000);
    })
}