// Selector for logo
const letterQ = document.querySelector('.letter__q');
const letters = document.querySelectorAll('.letters span');
// Selector from welcome section
const welcomeSection = document.querySelector('.section1-welcome');
const welcomeSectionH1 = document.querySelector('.section1-welcome__h1');
const AllwelcomeSectionP = document.querySelectorAll('.section1-welcome p');
const btnWelcomeSection = document.querySelector('.section1-welcome__btn');


const tl = new TimelineMax({
    delay: 0.5
})

tl.to(letterQ, 1, {
    opacity: 1,
}).to(letterQ, 2, {
    textShadow: ("0px 20px 18px rgb(65, 65, 65)"),
}, "-=1").to(letterQ, 1, {
    textShadow: ("0px 0px 0px #ffce5d"),
    color: "#2b2c2e"
}).to(letterQ, 0.1, {
    x: -50
}).to(letters, {
    duration: .2,
    opacity: 1,
    stagger: {
        each: 0.03,
        from: 'end'
    }

}, "=-0.15").to(letterQ, 0.1, {
    delay: 1,
    y: "-100%",
}).to(letters, 0.1, {
    stagger: {
        each: 0.03,
        from: 'start'
    },
    y: "-380%"

}, "-=0.1").to(welcomeSection, 0.5, {
    bottom: "0vh",
    ease: Bounce.easeOut
}, "-=0.2").from(welcomeSectionH1, 0.2, {
    opacity: 0,
    y: 10
}, "-=0.18").from(AllwelcomeSectionP, 0.2, {
    opacity: 0,
    y: 10
}, "-=0.18").from(btnWelcomeSection, 0.2, {
    opacity: 0,
    y: 10
}, "-=0.15")