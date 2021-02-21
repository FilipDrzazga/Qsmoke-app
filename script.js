
// "I have to counted..."

document.getElementById('iHaveToCounted').addEventListener('touchend', function (e) {

    smokePerDay = currentUser.smokePerDay;
    costOfPack = currentUser.costOfPack;
    cigarettesInPack = currentUser.cigarettesInPack;


    document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
    document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
    document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;

})
// Selector for logo
const letterQ = document.querySelector('.letter__q');
const letters = document.querySelectorAll('.letters span');
// Selector from welcome section
const welcomeSection = document.querySelector('.section1-welcome');
const welcomeContentAnimation = document.querySelectorAll('[data-animationwelcome]')
const btnWelcomeSection = document.querySelector('.section1-welcome__btn');
// Selector from form section
const formSection = document.querySelector('.section2-form');
const formContentAnimation = document.querySelectorAll('[data-animationform]')
const formSectionInput = document.querySelector('.section2-form__input');
const formSectionBtn = document.querySelector('.section2-form__btn');
const animationDiv = document.querySelector('.animation-div')
const dots = document.querySelectorAll('.dot');
// Selector for your-way section
const yourWaySection = document.querySelector('.section3-your-way');
const wayContentAnimation = document.querySelectorAll('[data-animationway]')
const yourWaySectionDiv1 = document.querySelector('.section3-your-way__div1');
const yourWaySectionDiv2 = document.querySelector('.section3-your-way__div2');
const yourWayBothDivs = document.querySelectorAll('.section3-your-way__div')
const yourWaySectionBtn = document.querySelector('.section3-your-way__btn');
// Selector for about user section
const aboutSection = document.querySelector('.section4-about-user');
const aboutSectionSmokePerDay = document.querySelector('.section4-about-user__div1__p2')
const aboutSectionCostOfPack = document.querySelector('.section4-about-user__div2__p2')
const aboutSectionCigarettIn = document.querySelector('.section4-about-user__div3__p2')
const aboutSectionBtn = document.querySelector('.section4-about-user__btn')
const aboutSectionBtnBack = document.querySelector('.section4-about-user__btnback')
const aboutContentAnimation = document.querySelectorAll('[data-animationabout]');
// Selector for main section
const mainSectionUserName = document.querySelector('.section5-main-screen__h2');

// User stats
class user {
    constructor(userName = "Unknown", userKnowWay = false, smokePerDay = 0, costOfPack = 16.90, cigarettesInPack = 0) {
        this.userName = userName;
        this.smokePerDay = smokePerDay;
        this.costOfPack = costOfPack;
        this.cigarettesInPack = cigarettesInPack;
        this.userKnowWay = userKnowWay;
        this.data = {
            userName: this.userName,
            smokePerDay: this.smokePerDay,
            costOfPack: this.costOfPack,
            cigarettesInPack: this.cigarettesInPack
        };
    };
};

// ALL FUNCTION-------------------------------------------------------------

// costOfPack round function
function roundPrecised(number, precision) {
    var power = Math.pow(10, precision);

    return Math.round(number * power) / power;
}
// step dot loading function
const dotLoadingStep = function (stepTo, stepFrom = 0) {
    let boudingElFrom = dots[stepFrom].getBoundingClientRect();
    let boudingElTo = dots[stepTo].getBoundingClientRect();

    let movingStep = (boudingElTo.x - boudingElFrom.x) + boudingElTo.width

    return movingStep
};

// --------------------------------------------------------------------------

// Intro animation

const animationIntro = new TimelineMax({ delay: 0.5 });
animationIntro.eventCallback('onStart', function () { return reverse = false })
    .to(letterQ, 3, { opacity: 1, })
    .to(letterQ, 2, { textShadow: ("0px 20px 18px rgb(65, 65, 65)"), }, "-=3")
    .to(letterQ, 3, { color: "#2b2c2e" }, '-=3')
    .to(letterQ, 3, { textShadow: ("0px 0px 0px #ffce5d") }, "-=1")
    .to(letterQ, 1, { x: -50 }, "-=1")
    .to(letters, { duration: .2, opacity: 1, stagger: { each: 0.09, from: 'end' } }, "=-0.15")
    .to(letterQ, 1, { delay: 0.5, y: "-100%", })
    .add(function () { return !reverse ? animationIntro.play() : animationIntro.pause() })
    .to(letters, 1, { stagger: { each: 0.03, from: 'start' }, y: "-380%" }, "-=1")
    .to(welcomeSection, 1, { bottom: "-10vh", ease: Back.easeOut.config(1.5) },)
    .from(welcomeContentAnimation, 1, { stagger: { each: 0.2, from: "start" }, opacity: 0, y: 20 })
    .eventCallback("onComplete", function () { return reverse = true });

// Welcome section btn --> skip to user Name section
btnWelcomeSection.addEventListener("click", function () {

    animationIntro.reverse(0);

    const animationToUserNameSection = new TimelineMax({ delay: 2.2 });
    animationToUserNameSection.to(animationDiv, 2, { scale: 40 })
        .to(formSection, 0, { left: 0, opacity: 1 }, '-=0.7')
        .from(formContentAnimation, 1, { stagger: { each: 0.2, from: "start" }, opacity: 0, y: 20 })
        .to(dots, 1, { stagger: { each: 0.05, from: 'start', ease: Back.easeOut.config(1.7) }, opacity: 1, y: -20 }, '-=0.8');
});

// "Go forward" after providing user name

formSectionBtn.addEventListener('click', function () {

    userName = formSectionInput.value;
    userData = JSON.parse(localStorage.getItem(userName));

    if (!userData) {

        newUser = true;
        currentUser = new user(userName); // default data

    } else {

        newUser = false;
        currentUser = new user(userData.userName, userData.smokePerDay, userData.costOfPack, userData.cigarettesInPack);

    }

    mainSectionUserName.innerHTML = userName;

    const animationToWaySection = new TimelineMax();
    animationToWaySection.to(formContentAnimation, 1, { stagger: { each: 0.2, from: "end" }, opacity: 0, y: 20 })
        .to(formSection, 0, { left: "-100%", opacity: 0 })
        .to(yourWaySection, 0, { left: 0, opacity: 1 })
        .to(dots[0], 1, { width: dotLoadingStep(1) })
        .from(wayContentAnimation, 1, { stagger: { each: 0.2, from: "start" }, opacity: 0, y: 20 }, "-=0.9");

});

// User choose way "Yeah, I know" or "I have to counted"
yourWayBothDivs.forEach(function (div) {
    div.addEventListener('click', function () {
        const iKnow = div.classList.contains('section3-your-way__div1')

        if (iKnow) {
            yourWaySectionDiv1.classList.add('section3-your-way__div1--isActive')
            yourWaySectionDiv2.classList.remove('section3-your-way__div2--isActive')
            currentUser.userKnowWay = true
        } else {
            yourWaySectionDiv1.classList.remove('section3-your-way__div1--isActive')
            yourWaySectionDiv2.classList.add('section3-your-way__div2--isActive')
            currentUser.userKnowWay = false
        }
    })
})


// "Next step" after providing user choose way
yourWaySectionBtn.addEventListener('click', function () {
    if (currentUser.userKnowWay) {

        const animationToAboutUserSection = new TimelineMax()
        animationToAboutUserSection.to(wayContentAnimation, 1, { stagger: { each: 0.2, from: "start" }, opacity: 0, y: 20 },)
            .to(yourWaySection, 0, { left: "-100%", opacity: 0 })
            .to(aboutSection, 0, { left: 0, opacity: 1 })
            .to(dots[0], 1, { width: dotLoadingStep(2) })
            .from(aboutContentAnimation, 1, { stagger: { each: 0.2, from: "start" }, opacity: 0, y: 20 }, "-=0.9")

        aboutSectionSmokePerDay.textContent = currentUser.smokePerDay;
        aboutSectionCostOfPack.textContent = currentUser.costOfPack;
        aboutSectionCigarettIn.textContent = currentUser.cigarettesInPack;


    } else { return }
})