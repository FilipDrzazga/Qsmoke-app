// plus/minus fuctions

function roundPrecised(number, precision) {
	var power = Math.pow(10, precision);

  	return Math.round(number * power) / power;
}

function addSmokePerDay(){
    smokePerDay++;
    document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
}
function subtractSmokePerDay(){
    if(smokePerDay>0){
    smokePerDay--;
    document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
    }
}
function addCostOfPack(){
    costOfPack += 0.1;
    costOfPack = roundPrecised(costOfPack,3);
    document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
}
function subtractCostOfPack(){
    if(costOfPack>0){
    costOfPack -= 0.1;
    costOfPack = roundPrecised(costOfPack,3);
    document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
    }
}
function addcigarettesInPack(){
    cigarettesInPack++;
    document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;
}
function subtractcigarettesInPack(){
    if(cigarettesInPack>0){
    cigarettesInPack--;
    document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;
    }
}


// plus/minus onclick


document.getElementsByClassName('section4-about-user__div section4-about-user__div1')[0].getElementsByClassName('btn-plus')[0].onclick = addSmokePerDay;
document.getElementsByClassName('section4-about-user__div section4-about-user__div1')[0].getElementsByClassName('btn-minus')[0].onclick = subtractSmokePerDay;
document.getElementsByClassName('section4-about-user__div section4-about-user__div2')[0].getElementsByClassName('btn-plus')[0].onclick = addCostOfPack;
document.getElementsByClassName('section4-about-user__div section4-about-user__div2')[0].getElementsByClassName('btn-minus')[0].onclick = subtractCostOfPack;
document.getElementsByClassName('section4-about-user__div section4-about-user__div3')[0].getElementsByClassName('btn-plus')[0].onclick = addcigarettesInPack;
document.getElementsByClassName('section4-about-user__div section4-about-user__div3')[0].getElementsByClassName('btn-minus')[0].onclick = subtractcigarettesInPack;


class user{
    constructor(userName,smokePerDay,costOfPack,cigarettesInPack){
        this.userName = userName;
        this.smokePerDay = smokePerDay;
        this.costOfPack = costOfPack;
        this.cigarettesInPack - cigarettesInPack;
    }
}


document.getElementsByClassName('btn section2-form__btn')[0].onclick = 
function setUserName(){
    userName = document.getElementsByClassName('section2-form__input')[0].value;
    currentUser = localStorage.getItem(userName);
    if(!currentUser){ newUser=true; }
    document.getElementsByClassName('section5-main-screen__h2')[0].innerHTML = userName;
}


document.getElementsByClassName('section3-your-way__div section3-your-way__div2')[0].onclick = 
function setValues(){
if(newUser){
    smokePerDay = 0;
    costOfPack = 15.50;
    cigarettesInPack = 0;
}else{
    smokePerDay = currentUser.smokePerDay;
    costOfPack = currentUser.costOfPack;
    cigarettesInPack = currentUser.cigarettesInPack;
    console.log('setVal');
}
document.getElementsByClassName('section4-about-user__div1__p2')[0].innerHTML = smokePerDay;
document.getElementsByClassName('section4-about-user__div2__p2')[0].innerHTML = costOfPack;
document.getElementsByClassName('section4-about-user__div3__p2')[0].innerHTML = cigarettesInPack;
}

function submitChanges(){

}
