let dayItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#min");
let secItem=document.querySelector("#sec");

let countDown = () =>{
    let futureDate= new Date("09 Nov 2024 12:00 PM");
    let currentDate=new Date();
    let launchDate=futureDate - currentDate;

    let days=Math.floor(launchDate / 1000 / 60 /60 / 24);
    let hours=Math.floor(launchDate / 1000/60/60)%24;
    let min=Math.floor(launchDate / 1000/60)%60;
    let sec=Math.floor(launchDate / 1000)%60;

    dayItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;

}

countDown()

setInterval(()=>{
        countDown()
},1000);