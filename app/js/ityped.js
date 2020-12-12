/*
    ------------------------
    ---- iTyped Script -----
    ------------------------
*/

// import { init } from 'ityped';

var options = {
    strings: ['Frontend Dev.', 
              'Telecom Eng.'],
    typeSpeed: 70, 
    backSpeed: 55, 
    startDelay: 500, 
    backDelay: 2000, 
    loop: true, 
    showCursor: true,
    cursorChar: "|", 
    onFinished: function(){}
}


ityped.init(document.getElementById('dynamic_text'), options);


