function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

const logo = document.querySelector(".nav-left")
const footerLogo = document.querySelector(".footer-container .logo")
logo.addEventListener("click", () => scrollToTop())
footerLogo.addEventListener("click", () => scrollToTop())
window.addEventListener("load", () => scrollToTop())

const bars = document.querySelectorAll(".bar")


function barHeightChange() {
    bars.forEach(
        (bar, index) => {
            let randomHeight = Math.floor(Math.random() * 100)
            bar.style.height = `${randomHeight}%`
        }
    )
}

const musicBar = () => setInterval(() => barHeightChange(), 500)

const percentage = document.querySelector(".percentage")
let percentageValue = 0;

function percentageLoading() {
    setInterval(() => {
        percentageValue++;
        if (percentageValue >= 100) {
            percentage.textContent = "100 %"
        }
        else {
            percentage.textContent = percentageValue + " %"
        }

    }, 50)
}

function gsapAnimation() {
    const tl = gsap.timeline();

    tl.from(".loader .bar-container", {
        y: 300,
        height: 0,
        duration: 1,
        onComplete: musicBar(),
    }, "loading")
    tl.from(".percentage", {
        y: 100,
        duration: 6,
        onComplete: percentageLoading()
    }, "loading")
    tl.to(".loader", {
        top: -100 + "%",
        duration: .5,
    })
    tl.from(".nav-left,.nav-center li,.nav-right button", {
        y: -100,
        duration: .6,
        stagger: .3,
    })
    tl.from(".hero-section-title", {
        x: -300,
        opacity: 0,
        duration: .8,
    }, "firstHeroSet")
    tl.from(".hero-section-desc", {
        x: 300,
        opacity: 0,
        duration: .8,
    }, "firstHeroSet")

    tl.from(".hero-image", {
        scale: 0,
        duration: 1,
    }, "heroImages")

    tl.from(".hero-section-image .extra-shape", {
        width: 10 + "%",
        duration: 1,
        scrollTrigger: {
            trigger: '.extra-shape',
            start: "top 50%",
            end: "top top",
            scrub: 2
        }
    }, "heroImages")
    tl.from(".highlight-heading,.highlight-desc", {
        x: 300,
        duration: 1,
        scrollTrigger: {
            trigger: '.highlight-heading,.highlight-desc',
            start: "top 80%",
            end: "top 50%",
            scrub: 2
        }
    })

    tl.from(".hero-section-two .left", {
        scale: 0,
        x: -100 + "%",
        duration: 1,
        scrollTrigger: {
            trigger: ".hero-section-two .left",
            start: "top 100%",
            end: "top 50%",
            scrub: 2
        }
    }, "secondHeroSet")
    tl.from(".hero-section-two .right div", {
        x: 100 + "%",
        duration: 1,
        stagger: .2,
        scrollTrigger: {
            trigger: ".hero-section-two .right div",
            start: "top 70%",
            end: "top 30%",
            scrub: 2
        }
    }, "secondHeroSet")
    tl.from(".feature", {
        scale: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: ".feature",
            start: 'top 90%',
            end: "top 60%",
            scrub: 2,
        }
    })
    tl.from(".course-section-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".course-section-title",
            start: 'top 80%',
            end: "top 70%",
            scrub: 2,
        }

    })
    tl.from(".course", {
        scale: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: ".course",
            start: 'top 90%',
            end: "top 70%",
            scrub: 2,
        }
    })
    tl.from(".process .left div,.process-steps .step", {
        x: -100 + "%",
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.left div,.process-steps .step',
            start: "top 70%",
            end: "top 30%",
            scrub: 2
        }

    }, "process")
    tl.from(".process .right", {
        x: 100 + "%",
        scale: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.process .right',
            start: "top 100%",
            end: "top 50%",
            scrub: 2
        }

    }, "process")
    tl.from(".get-started .right div,.get-started .right button", {
        x: 600,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.get-started .right div,.get-started .right button',
            start: "top 70%",
            end: "top 30%",
            scrub: 2
        }

    }, "getStarted")
    tl.from(".get-started .left", {
        x: -100 + "%",
        scale: 0,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.get-started .left',
            start: "top 100%",
            end: "top 50%",
            scrub: 2
        }

    }, "getStarted")
    tl.from(".mobile-app,.download-links div", {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: .3,
        scrollTrigger: {
            trigger: ".mobile-app,.download-links div",
            start: 'top 80%',
            end: "top 70%",
            scrub: 2,
        }
    }, "footer")
    tl.from(".footer .extra-shape", {
        width: 10 + "%",
        duration: 1,
        scrollTrigger: {
            trigger: '.footer .extra-shape',
            start: "top 50%",
            end: "top top",
            scrub: 2
        }
    }, "footer")
    tl.from(".footer-container", {
        scale: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.footer-container',
            start: "top 100%",
            end: "top 90%",
            scrub: 2,
        }
    }, "footerLinks")
    tl.from(".footer-container .left div", {
        y: 200,
        x: -500,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.footer-container .left div',
            start: "top 100%",
            end: "top 90%",
            scrub: 2,
        }

    }, "footerLinks")
    tl.from(".link-set li", {
        y: 200,
        x: 500,
        duration: 2,
        stagger: .3,
        scrollTrigger: {
            trigger: '.link-set li',
            start: "top 100%",
            end: "top 90%",
            scrub: 2,
        }

    }, "footerLinks")
    tl.from(".inspiration,.illustrations", {
        y: 200,
        scale: 0,
        duration: 1,
        stagger: .5,
        scrollTrigger: {
            trigger: '.credits',
            start: "top 100%",
            end: "top 95%",
            scrub: 2,
        }

    }, "footerLinks")



}

gsapAnimation();