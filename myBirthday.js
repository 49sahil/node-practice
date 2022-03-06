//tells how many days are left in your birthday
async function daysLeft(){
    var moment= require('moment');
    var yearr= moment().get('year');
    
    const prompt=require('prompt');
    let d= await prompt.get('dayNumber');
    let m= await prompt.get('monthNumber');
    dayy= parseInt(d.dayNumber);
    monthh= parseInt(m.monthNumber);
    // console.log(dayy,monthh);
    var birthday= moment([yearr, monthh-1, dayy]);
    var i=0;
    while (true){
        if((moment().add(i,'days').date()==birthday.date()) && (birthday.month()==moment().add(i,'days').month())){
            break;
        }
        else{
            i+=1;
        }
    }
    console.log(i);
}
// function myclick(){
//     // let fetch= document.getElementById("birthday").value;
//     // let d= parseInt(fetch[-2]);
//     // let m= parseInt(fetch[-5,-3]);
//     let mon= prompt("enter the month no. of your birthday (ex: `4` for april)");
//     let d= prompt("enter the day of the month");
//     let days= daysLeft(d,mon);
//     document.getElementById("days").innerHTML= days;
//     // console.log(days);
// }
daysLeft();