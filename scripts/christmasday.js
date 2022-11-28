// Script to show the christmas day message on Christmas Day
const christmasDay = new Date();
const messageDisplay = document.querySelector(".christmas_day_message");
if (christmasDay.getMonth() === 11 && christmasDay.getDate() === 25) {
  messageDisplay.style.display = "block";
} else {
  messageDisplay.style.display = "none";
}

/*Christmas day countdown  */
var countDownDate = new Date("Dec 25, 2022 23:59:59").getTime();
var now = 0;
var distance =0;
var days = 0;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
   now = new Date().getTime();

  // Find the distance between now and the count down date
  distance = countDownDate - now;
 
  // Time calculations for days, 
 days = Math.floor(distance / (1000 * 60 * 60 * 24));  
 

  // Display the result in the element with id="demo"
 
  document.getElementById("christmasDayCountdown").innerHTML = days + " days left untill Christmas " ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("christmasDayCountdown").innerHTML = "";
  }
}, 1000);
