"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var chrono;

const start = ()=>{
    chrono = setInterval(()=>{
        timer()
    },tempo)
}

const pause = ()=>{
    clearInterval(chrono)
}

const stop = ()=>{
    clearInterval(chrono)
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('time').innerHTML = "00:00:00"
}
const timer = ()=>{
    ss++

    if(ss == 60){
        ss = 0;
        mm++;
        if(mm == 60){
            mm = 0;
            hh++
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('time').innerHTML = format
}