function clock(){
	let time = new Date();
	let hours = (time.getHours() % 12).toString();
	let minutes = time.getMinutes().toString();
	let seconds = time.getSeconds().toString();

	if(seconds.length < 2){
		seconds = 0 + seconds;
	};

	if(minutes.length < 2){
		minutes = 0 + minutes;
	};

	if(hours.length < 2){
		hours = 0 + hours;
	};

	if(hours == 00){
		hours = 12;
	}


	
	let clockString = document.querySelector('#clock');

	clockString.textContent = hours +': ' + minutes + ': ' + seconds; //changes the default text to the current time according to the variables.
}

clock();
setInterval(clock, 1000);