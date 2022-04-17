// Script to show the christmas day message on New Year's Day
const christmasDay = new Date();
const messageDisplay = document.querySelector(".new_years_message");
if (christmasDay.getMonth() === 1 && christmasDay.getDate() === 1) {
  messageDisplay.style.display = "block";
} else {
  messageDisplay.style.display = "none";
}
