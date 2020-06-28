var time = 0;
var run = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var sz = 0;
var in1 = false;
var in2 = false;
var in3 = false;
var in4 = false;
function start(){
  time = true;
  document.getElementById("start").disabled = true;
  timer();
  var elem1 =document.getElementById("animate1");
  var elem2 =document.getElementById("animate2");
  var elem3 =document.getElementById("animate3");
  var elem4 =document.getElementById("animate4");
  var k1 = Math.random()*100;
  var k2 = Math.random()*100;
  var k3 = Math.random()*100;
  var k4 = Math.random()*100;
  var p1 = setInterval(frame1,k1);
  var p2 = setInterval(frame2,k2);
  var p3 = setInterval(frame3,k3);
  var p4 = setInterval(frame4,k4);
  function frame1(){
    if(c1 == 950){
      clearInterval(p1);
      elem1.style.backgroundImage = "url('../images/tenor.gif')";
      elem1.style.backgroundSize = "cover"
    }else{
      c1++;
      elem1.style.left = c1+"px";
    }
  }
  function frame2(){
    if(c2 == 950){
      clearInterval(p2);
      elem2.style.backgroundImage = "url('../images/tenor.gif')";
      elem2.style.backgroundSize = "cover"
      clearTimeout(run);
    }else{
      c2++;
      elem2.style.left = c2+"px";
    }
  }
  function frame3(){
    if(c3 == 950){
      clearInterval(p3);
      elem3.style.backgroundColor= "red";
      elem3.style.backgroundImage = "url('../images/tenor.gif')";
      elem3.style.backgroundSize = "cover"
      // clearTime(run);
    }else{
      c3++;
      elem3.style.left = c3+"px";
    }
  }
  function frame4(){
    if(c4 == 950){
      clearInterval(p4);
      elem4.style.backgroundColor= "red";
      elem4.style.backgroundImage = "url('../images/tenor.gif')";
      elem4.style.backgroundSize = "cover"
      // clearTime(run);
    }else{
      c4++;
      elem4.style.left = c4+"px";
    }
  }
}

function reset(){
  time = false;
  run = 0;
  document.getElementById("start").disabled = false;
  document.getElementById("output").innerHTML = "00:00:00";
}

function timer(){
  if(c1 === 950 && !in1) {
    in1 = true;
    ++sz;
    document.getElementById(""+sz).innerHTML = 'c1 ' + sz + ' place - ' + document.getElementById("output").innerHTML;
  }
  if(c2 === 950 && !in2) {
    in2 = true;
    ++sz;
    document.getElementById(""+sz).innerHTML = 'c2 ' + sz + ' place - ' + document.getElementById("output").innerHTML;
  }
  if(c3 === 950 && !in3) {
    in3 = true;
    ++sz;
    document.getElementById(""+sz).innerHTML = 'c3 ' + sz + ' place - ' + document.getElementById("output").innerHTML;
  }
  if(c4 === 950 && !in4) {
    in4 = true;
    ++sz;
    document.getElementById(""+sz).innerHTML = 'c4 ' + sz + ' place - ' + document.getElementById("output").innerHTML;
  }
  if (c1 === 950 && c2 === 950 && c3 === 950 && c4 === 950) {
    time = false
  }
  if (time == true)
  {
    setTimeout(function(){
      run++;
      var min = Math.floor(run/100/60);
      var sec = Math.floor(run/100);
      var mSec = run % 100;
      if(min < 10){
        min = "0" + min;
      }
      if(sec >= 60){
        sec = sec % 60;
      }
      if(sec < 10){
        sec = "0" + sec;
      }
      document.getElementById("output").innerHTML = min + ":" + sec + ":" + mSec;
      timer();

    },10);
  }
}



// function finishCar(){
//
// }
