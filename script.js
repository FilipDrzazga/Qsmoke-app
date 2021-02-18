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

tl.to(letterQ, 3, {
    opacity: 1,
}).to(letterQ, 2, {
    textShadow: ("0px 20px 18px rgb(65, 65, 65)"),
}, "-=3").to(letterQ, 3, {
    color: "#2b2c2e"
}, '-=3').to(letterQ, 3, {
    textShadow: ("0px 0px 0px #ffce5d")
}, "-=1").to(letterQ, 1, {
    x: -50
}, "-=1").to(letters, {
    duration: .2,
    opacity: 1,
    stagger: {
        each: 0.09,
        from: 'end'
    }

}, "=-0.15").to(letterQ, 1, {
    delay: 0.5,
    y: "-100%",
}).addLabel("welcome", "-=0.9").to(letters, 1, {
    stagger: {
        each: 0.03,
        from: 'start'
    },
    y: "-380%"

}, "-=1").to(welcomeSection, 1.2, {
    bottom: "-10vh",
    ease: Back.easeOut.config(1.5)
}, "welcome").from(welcomeSectionH1, 0.5, {
    opacity: 0,
    y: 20
}, "-=0.15").from(AllwelcomeSectionP, 0.5, {
    opacity: 0,
    y: 20
}, "-=0.15").from(btnWelcomeSection, 0.5, {
    opacity: 0,
    y: 20
}, "-=0.12");

btnWelcomeSection.addEventListener('touchend', function (e) {
    console.log('click');
})