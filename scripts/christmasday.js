// Script to show the christmas day message on Christmas Day
const christmasDay = new Date();
const messageDisplay = document.querySelector(".christmas_day_message");
if (christmasDay.getMonth() === 11 && christmasDay.getDate() === 25) {
  messageDisplay.style.display = "block";
} else {
  messageDisplay.style.display = "none";
}
