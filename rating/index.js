// get the input
const rating = document.getElementById("rating");

// handles changes in the input and renders values to the screen
function handleChange() {
  const res = document.getElementById("demo");
  res.innerHTML = rating.value;
}
//       Actions that takes oplace once the form is submitted 
let submit = document.querySelector("#submit");
submit.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();       // stops browser default behhaviour of automatically submitting 

  if (rating.value == "0") {
    let review_msg = document.querySelector("#review_msg");
    review_msg.style.visibility = "visible";
    review_msg.innerText = "You must choose a rating";

    return false;
  } else {
    // success msg on successful rating
    review_msg.innerText = "Success";
    review_msg.style.visibility = "visible";
  }
}
