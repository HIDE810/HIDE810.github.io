timerID = setInterval('clock()',500);

function clock() {
    document.getElementById("view_clock").innerHTML = getNow();
}

function set2fig(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}

function getNow() {
    var now = new Date();
    var hour = set2fig(now.getHours());
    var min = set2fig(now.getMinutes());
    var sec = set2fig(now.getSeconds());

    var s = hour + ":" + min + ":" + sec; 
    return s;
}