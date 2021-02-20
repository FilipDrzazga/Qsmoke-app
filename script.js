// costOfPack round function

function roundPrecised(number, precision) {
	var power = Math.pow(10, precision);

  	return Math.round(number * power) / power;
}

// Plus/minus event listeners


document.getElementById('smokePerDayPlus').addEventListener('touchend', function(e){
    smokePerDay++;
    document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
})
document.getElementById('smokePerDayMinus').addEventListener('touchend',function(e){
    if(smokePerDay>0){
    smokePerDay--;
    document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
    }
})
document.getElementById('costOfPackPlus').addEventListener('touchend',function(e){
    costOfPack += 0.1;
    costOfPack = roundPrecised(costOfPack,3);
    document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
})
document.getElementById('costOfPackMinus').addEventListener('touchend',function(e){
    if(costOfPack>0){
    costOfPack -= 0.1;
    costOfPack = roundPrecised(costOfPack,3);
    document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
    }
})
document.getElementById('cigarettesInPackPlus').addEventListener('touchend',function(e){
    cigarettesInPack++;
    document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;
})
document.getElementById('cigarettesInPackMinus').addEventListener('touchend',function(e){
    if(cigarettesInPack>0){
    cigarettesInPack--;
    document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;
    }
})

// user class definition

class user{
    constructor(userName,smokePerDay,costOfPack,cigarettesInPack){
        this.userName = userName;
        this.smokePerDay = smokePerDay;
        this.costOfPack = costOfPack;
        this.cigarettesInPack = cigarettesInPack;
        this.data = {
            userName: this.userName,
            smokePerDay: this.smokePerDay,
            costOfPack: this.costOfPack,
            cigarettesInPack: this.cigarettesInPack
        }
    }
}

// "Go forward" after providing user name

document.getElementById('goForward').addEventListener('touchend',function(e){

    userName = document.getElementsByClassName('section2-form__input')[0].value;
    userData = JSON.parse(localStorage.getItem(userName));

    if(!userData){ newUser=true;
        
        currentUser = new user(userName,0,16.70,0); // default data

    }else{

        newUser = false;
        currentUser = new user(userData.userName,userData.smokePerDay,userData.costOfPack,userData.cigarettesInPack);

    }

    document.getElementsByClassName('section5-main-screen__h2')[0].innerHTML = userName;
})

// "I have to counted..."

document.getElementById('iHaveToCounted').addEventListener('touchend',function(e){

smokePerDay = currentUser.smokePerDay;
costOfPack = currentUser.costOfPack;
cigarettesInPack = currentUser.cigarettesInPack;


document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;

})

// "Qsmoke" - submit changes

document.getElementById('qsmoke').addEventListener('touchend', function(e){
    
    currentUser.smokePerDay = smokePerDay;
    currentUser.costOfPack = costOfPack;
    currentUser.cigarettesInPack = cigarettesInPack;
    
    if(!newUser){localStorage.removeItem(currentUser.userName);}

    console.log('Qsmoke');
    currentUser = new user(userName,smokePerDay,costOfPack,cigarettesInPack);
    userJSON = JSON.stringify(currentUser.data);
    localStorage.setItem(currentUser.userName,userJSON);
})

// Selector for logo
const letterQ = document.querySelector('.letter__q');
const letters = document.querySelectorAll('.letters span');
// Selector from welcome section
const welcomeSection = document.querySelector('.section1-welcome');
const welcomeSectionH1 = document.querySelector('.section1-welcome__h1');
const AllwelcomeSectionP = document.querySelectorAll('.section1-welcome p');
const btnWelcomeSection = document.querySelector('.section1-welcome__btn');

const tlIntro = new TimelineMax({ delay: 0.5 })
tlIntro.eventCallback('onStart', function () { return reverse = false })
    .to(letterQ, 3, { opacity: 1, })
    .to(letterQ, 2, { textShadow: ("0px 20px 18px rgb(65, 65, 65)"), }, "-=3")
    .to(letterQ, 3, { color: "#2b2c2e" }, '-=3')
    .to(letterQ, 3, { textShadow: ("0px 0px 0px #ffce5d") }, "-=1")
    .to(letterQ, 1, { x: -50 }, "-=1")
    .to(letters, { duration: .2, opacity: 1, stagger: { each: 0.09, from: 'end' } }, "=-0.15")
    .add(function () { return !reverse ? tlIntro.play() : tlIntro.pause() })
    .to(letterQ, 1, { delay: 0.5, y: "-100%", })
    .addLabel("welcome", "-=0.9")
    .to(letters, 1, { stagger: { each: 0.03, from: 'start' }, y: "-380%" }, "-=1")
    .to(welcomeSection, 1.2, { bottom: "-10vh", ease: Back.easeOut.config(1.5) }, "welcome")
    .from(welcomeSectionH1, 0.5, { opacity: 0, y: 20 }, "-=0.15")
    .from(AllwelcomeSectionP, 0.5, { opacity: 0, y: 20 }, "-=0.15")
    .from(btnWelcomeSection, 0.5, { opacity: 0, y: 20 }, "-=0.12")
    .eventCallback("onComplete", function () { return reverse = true })


btnWelcomeSection.addEventListener("click", function () {

    const animationDiv = document.createElement("div");
    animationDiv.classList.add("animation-div");
    welcomeSection.after(animationDiv);

    tlIntro.reverse(0);

    const tlSlideDiv = new TimelineMax({delay:3})
    tlSlideDiv.to(animationDiv,2,{scale:40})


});
