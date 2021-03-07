
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
const aboutQsmokeDay = document.querySelector('.section4-about-user__div4')
const aboutSectionBtn = document.querySelector('.section4-about-user__btn')
const aboutSectionBtnBack = document.querySelector('.section4-about-user__btnback')
const aboutContentAnimation = document.querySelectorAll('[data-animationabout]');
// Selector for main section
const mainSection = document.querySelector('.section5-main-screen');
const mainSectionh1 = document.querySelector('.section5-main-screen__h1');
const mainSectionUserName = document.querySelector('.section5-main-screen__h2');
const mainSectionPhoto = document.querySelector('.section5-main-screen__photo');
const mainContentAnimation1 = document.querySelectorAll('[data-animationmain1]')
const mainContentAnimation2 = document.querySelectorAll('[data-animationmain2]')
const mainContentAnimation3 = document.querySelectorAll('[data-animationmain3]')
// Selector for nav
const nav = document.querySelector('.navbar')



// Calendar class
const monthsName = ['January', 'February', 'March', "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysName = ["Mon", 'Tue', 'Wed', 'Thu', 'Fr', 'Sat', 'Sun'];
class MyCalendarInfo {
    constructor(allMonths, namesOfDays) {
        this.date = new Date();
        this.currerntYear = this.date.getFullYear();
        this.currentMonth = this.date.getMonth();
        this.currentDay = this.date.getDate();
        this.allMonths = allMonths;
        this.namesOfDays = namesOfDays;
    };

    getCurrentMonthDays() {
        return new Date(this.currerntYear, this.currentMonth + 1, 0).getDate();
    };
    getPrevMonthDays() {
        return new Date(this.currerntYear, this.currentMonth, 0).getDate();
    };
    getNextMonthDays() {
        return new Date(this.currerntYear, this.currentMonth + 2, 0).getDate();
    };
    getFirstDayNumOfWeek() {
        if (new Date(this.currerntYear, this.currentMonth, 1).getDay() === 0) {
            return new Date(this.currerntYear, this.currentMonth, 1).getDay() + 7;
        } else {
            return new Date(this.currerntYear, this.currentMonth, 1).getDay();
        }
    };
    getLastDayNumOfWeek() {
        if (new Date(this.currerntYear, this.currentMonth + 1, 0).getDay() === 0) {
            return new Date(this.currerntYear, this.currentMonth + 1, 0).getDay() + 7;
        } else {
            return new Date(this.currerntYear, this.currentMonth + 1, 0).getDay();
        };
    };
    getMonthName() {
        return this.allMonths[this.currentMonth];
    };
};
class user {
    constructor(userName = "Unknown", userKnowWay = false, smokePerDay = 0, costOfPack = 16.90, cigarettesInPack = 0) {
        this.userName = userName;
        this.smokePerDay = smokePerDay;
        this.costOfPack = costOfPack;
        this.cigarettesInPack = cigarettesInPack;
        this.userKnowWay = userKnowWay;
        this.quickDate = ''
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
    .add(function () { return !reverse ? animationIntro.play() : animationIntro.pause() })
    .to(letterQ, 1, { delay: 0.5, y: "-100%", })
    .to(letters, 1, { stagger: { each: 0.03, from: 'start' }, y: "-380%" }, "-=1")
    .to(welcomeSection, 1, { bottom: "-5vh", ease: Back.easeOut.config(1.5) },"-=1")
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

    mainSectionUserName.textContent = userName;

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

// Display Calendar
aboutQsmokeDay.addEventListener('click', function () {

    const currentMonth = new MyCalendarInfo(monthsName, daysName);

    const elHtml = document.createElement('div');
    elHtml.classList.add('calendar');
    elHtml.innerHTML = `
        <h1 class="calendar__month">${currentMonth.getMonthName()}</h1>
        <h2 class="calendar__currentYear">${currentMonth.currerntYear}</h2>
        <div class="calendar__daysNameContener"></div>
        <div class="calendar__allMonthDaysContener"></div>
    <button class="calendar__btn btn-prev"><i class="fas fa-long-arrow-alt-left"></i></button>
    <button class="calendar__btn btn-next"><i class="fas fa-long-arrow-alt-right"></i></button>`

    document.body.insertAdjacentElement("afterbegin", elHtml);

    const calendar = document.querySelector('.calendar');
    const calendarCurrentYear = document.querySelector('.calendar__currentYear');
    const nameOfTheMonth = document.querySelector('.calendar__month');
    const daysNameContener = document.querySelector('.calendar__daysNameContener');
    const allMonthDaysContener = document.querySelector('.calendar__allMonthDaysContener');
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');

    displayCalendar = new TimelineMax();
    displayCalendar.from(calendar, 1, { x: -500, ease: Back.easeOut.config(1.5) });

    currentMonth.namesOfDays.forEach((day) => {
        const el = document.createElement('div');
        el.classList.add('daysNameContener__day-name');
        el.textContent = day;
        daysNameContener.insertAdjacentElement('beforeend', el);
    });

    const displayDays = function () {

        let numOfcurrentDaysMonth = currentMonth.getCurrentMonthDays()
        for (i = 1; i <= numOfcurrentDaysMonth; i++) {
            const dayNum = document.createElement('div');
            dayNum.classList.add('allMonthDaysContener__day-number');
            dayNum.textContent = i;
            allMonthDaysContener.insertAdjacentElement('beforeend', dayNum);
        };

        let firstNumDayOfMonth = currentMonth.getFirstDayNumOfWeek();
        let lastNumDayOfMonth = currentMonth.getLastDayNumOfWeek();
        let prevMonth = currentMonth.getPrevMonthDays();

        for (j = 0; j < firstNumDayOfMonth - 1; j++) {
            const el = document.createElement('div');
            el.classList.add('allMonthDaysContener__firstDaysInNewMonths');
            allMonthDaysContener.insertAdjacentElement('afterbegin', el);
            el.textContent = prevMonth;
            prevMonth--;
        };

        let nextMonth = 1;
        if (lastNumDayOfMonth === 7) {
            for (y = 0; y <= 6; y++) {
                const el = document.createElement('div');
                el.classList.add('allMonthDaysContener__lastDaysInPrevMonths');
                allMonthDaysContener.insertAdjacentElement('beforeend', el);
                el.textContent = nextMonth;
                nextMonth++;
            };
        } else {
            for (y = lastNumDayOfMonth; y <= 6; y++) {
                const el = document.createElement('div');
                el.classList.add('allMonthDaysContener__lastDaysInPrevMonths');
                allMonthDaysContener.insertAdjacentElement('beforeend', el);
                el.textContent = nextMonth;
                nextMonth++;
            };

        };
    };

    displayDays();

    nextBtn.addEventListener('click', function () {
        currentMonth.currentMonth++;

        if (currentMonth.currentMonth === 12) {
            currentMonth.currerntYear++;
            currentMonth.currentMonth = 0;
        };

        currentMonth.date = new Date(currentMonth.currerntYear, currentMonth.currentMonth, currentMonth.currentDay);

        nameOfTheMonth.textContent = currentMonth.getMonthName();
        calendarCurrentYear.textContent = currentMonth.currerntYear;

        allMonthDaysContener.innerHTML = '';

        displayDays();
        console.log(currentMonth.date);

    });

    prevBtn.addEventListener('click', function () {
        currentMonth.currentMonth--;
        if (currentMonth.currentMonth === -1) {
            currentMonth.currerntYear--;
            currentMonth.currentMonth = 11;
        };
        currentMonth.date = new Date(currentMonth.currerntYear, currentMonth.currentMonth, currentMonth.currentDay);

        nameOfTheMonth.textContent = currentMonth.getMonthName();
        calendarCurrentYear.textContent = currentMonth.currerntYear;

        allMonthDaysContener.innerHTML = '';

        displayDays();
        console.log(currentMonth.date);

    });

    allMonthDaysContener.addEventListener('click', function (e) {
        if (e.target.classList.contains('allMonthDaysContener__day-number')) {

            e.target.classList.add('allMonthDaysContener__day-number--active');
            let numOfDayQuick = e.target.textContent
            displayCalendar.to(calendar, 1, { x: 500, }).add(function () { calendar.remove() });

            return currentUser.quickDate = new Date(currentMonth.currerntYear,currentMonth.currentMonth,++(numOfDayQuick))
        };
    })
});

aboutSectionBtn.addEventListener('click', function () {
     const animationToMainSection = new TimelineMax()
    animationToMainSection.to(aboutContentAnimation, 1, { stagger: { each: 0.2, from: "end" }, opacity: 0, y: 20 })
        .to(dots, 1, { scale: 0 }, "-=1.5")
        .to(mainSection, 0.2, { left: 0})
        .from(mainSectionh1, 0.3, { scale: 0 })
        .from(mainSectionUserName, 0.3, { scale: 0 })
        .from(mainSectionPhoto, 0.3, { scale: 0 })
        .from(mainContentAnimation1, 0.3, { opacity: 0, y: 20 })
        .from(mainContentAnimation2, 0.3, { opacity: 0, y: 20 })
        .from(mainContentAnimation3, 0.3, { opacity: 0, y: 20 })
        .to(nav, 0.3, { bottom:"0px" })
})