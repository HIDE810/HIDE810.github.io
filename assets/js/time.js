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
	var year = now.getFullYear();
	var mon = now.getMonth()+1;
	var day = now.getDate();
	var hour = set2fig(now.getHours());
	var min = set2fig(now.getMinutes());
	var sec = set2fig(now.getSeconds());
    var dayOfWeek = now.getDay();
    
    var monStr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mon];
    var dayOfWeekStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];

	var s = monStr + " " + day + ", " + year + " (" + dayOfWeekStr + ")<br>" + hour + ":" + min + ":" + sec; 
	return s;
}