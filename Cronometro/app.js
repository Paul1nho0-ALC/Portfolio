let ss = 0;
let mm = 0;
let hh = 0;
let time = 1000;
let timer_interval = undefined;

function timer(){
    ss ++;

    if(ss >= 60){
        ss = 0;
        mm ++;

        if(mm >= 60){
            mm = 0;
            hh ++;

            if(hh >= 24){
                pause();
            }
        }
    }

    document.getElementById('time').innerText = (hh < 10 ? '0' + hh: hh) + ' : ' + (mm < 10? '0' + mm: mm) + ' : ' + (ss < 10? '0' + ss: ss);
}

function start(){
    if(!timer_interval) timer_interval = setInterval(timer, time);
}

function pause(){
    clearInterval(timer_interval);
    timer_interval = null;
}

function stop(){
    clearInterval(timer_interval);
    timer_interval = null;
    ss = 0;
    mm = 0;
    hh = 0;

    document.getElementById('time').innerText = '00 : 00 : 00';
}

