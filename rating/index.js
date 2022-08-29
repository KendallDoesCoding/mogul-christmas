// get the input
const rating = document.getElementById("rating");

// handles changes in the input and renders values to the screen
function handleChange() {
  const res = document.getElementById("demo");
  res.innerHTML = rating.value;
}
//       Actions that takes oplace once the form is submitted 
const submit = document.querySelector("#submit");
submit.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();       // stops browser default behhaviour of automatically submitting 

  if (rating.value === '0') {
    const review_msg = document.querySelector("#review_msg");
    review_msg.style.visibility = "visible";
    review_msg.innerText = "You must choose a rating"
  }else{
    review_msg.style.visibility = 'visible'
    review_msg.innerText = 'Success'
  }
}