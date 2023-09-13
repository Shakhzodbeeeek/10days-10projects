let minutes = 0,
 seconds = 0,
 milliseconds = 0,
 timer;
 function startTimer(){
    timer = setInterval(updateTimer , 10);
 }


 function stoptTimer(){
    clearInterval(timer);
 }
 function resetTimer(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('minutes').textContent = padTime(minutes);
    document.getElementById('seconds').textContent = padTime(seconds);
    document.getElementById('milliseconds').textContent = padTime(milliseconds);
    clearInterval()
 }
 function updateTimer(){
    milliseconds++
    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    }
    document.getElementById('minutes').textContent = padTime(minutes)
    document.getElementById('seconds').textContent = padTime(seconds)
    document.getElementById('milliseconds').textContent = padTime(milliseconds)
 }
 function padTime(time){
    return time.toString().padStart(2, "0")
 }