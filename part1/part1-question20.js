function printTime(){
	d = new Date();
	time = d.toLocaleTimeString();
	console.log(time);
}
setInterval(printTime, 1000);