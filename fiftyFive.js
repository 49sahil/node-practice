//this file is to tell what will be the date after 55 days from today.
var moment = require('moment');

var after= moment().add(55,'days').format("Do MMM YYYY").toString();
console.log(after);
// var yea= moment().add(55,'days').format("YYYY").toString();
// var mon= moment().add(55,'days').format("MMM");
var dat= moment().add(55,'days').format("Do");
// function runclick(){
    // // var after= moment().add(55,'days').format("Do MMM YYYY").toString();
    // var moment = require('moment');
    // // var now= moment();
    // var after= moment().add(55,'days').format("Do MMM YYYY").toString();
    // var yea= moment().add(55,'days').format("YYYY").toString();
    // var mon= moment().add(55,'days').format("MMM");
    // var dat= moment().add(55,'days').format("Do");
    // document.getElementById("date").innerHTML= dat + ` ` + mon + ` `+ yea ;
    // console.log(dat,mon,yea);
    // console.log(after);
// }
// console.log(after);
// runclick();