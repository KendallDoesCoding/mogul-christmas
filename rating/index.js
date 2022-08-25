// get the input
let rating = document.getElementById('rating')
 
// handles changes in the input and renders values to the screen 
function handleChange(){
    let res = document.getElementById('demo')
    res.innerHTML = rating.value
}