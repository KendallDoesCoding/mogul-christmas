// Script to show the christmas day message on Christmas Day
const christmasDay = new Date();
const messageDisplay = document.querySelector(".christmas_day_message");
if (christmasDay.getMonth() === 11 && christmasDay.getDate() === 25) {
  messageDisplay.style.display = "block";
} else {
  messageDisplay.style.display = "none";
}

/*Christmas day countdown  */
var countDownDate = new Date("Dec 25, 2023 23:59:59").getTime();
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

  document.getElementById("christmasDayCountdown").innerHTML = days + " days left until Christmas " ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("christmasDayCountdown").innerHTML = "";
  }
}, 1000);

// // days since christmas was OVER

//     // One day Time in ms (milliseconds)
//     var one_day = 1000 * 60 * 60 * 24;

//     const date = new Date();

//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();

//     // This arrangement can be altered based on how we want the date's format to appear.
//     let currentDate = `${day}-${month}-${year}`;

//     // To set present_dates to two variables
//     var present_date = new Date(date);

//     // 0-11 is Month in JavaScript
//     var christmas_day = new Date(12-25-2022)

//     // To Calculate the result in milliseconds and then converting into days
//     var Result = Math.round(christmas_day - present_date) / (one_day);

//     // To remove the decimals from the (Result) resulting days value
//     var Final_Result = Result.toFixed(0);

// document.getElementById("christmasOVER").innerHTML = "Christmas was " + Final_Result + " days ago" ;
