var myNumbers1 = document.querySelector(".myNumbers1");
var myNumbers2 = document.querySelector(".myNumbers2");
var myNumbers3 = document.querySelector(".myNumbers3");

var pause = document.querySelector(".myButton");

var paused = false;

var random1;
var random2;
var random3;

function startInterval() {
  random1 = setInterval( function(){ myNumbers1.innerHTML = Math.floor(Math.random()*900 + 100);
  }, 100);
  random2 = setInterval( function(){ myNumbers2.innerHTML = Math.floor(Math.random()*900 + 100);
  }, 100);
  random3 = setInterval( function(){ myNumbers3.innerHTML = Math.floor(Math.random()*9000 + 1000);
  }, 100);
  
}
startInterval();

pause.addEventListener("click", function makeItStop(e){
  if(paused){
    paused = false;
    startInterval();
  } else {
    paused = true;
    stopInterval();
  }
});

function stopInterval(){
  clearInterval(random1);
  clearInterval(random2);
  clearInterval(random3);
}