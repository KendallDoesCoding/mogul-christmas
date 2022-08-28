// get the input
 const rating = document.getElementById('rating')
 
// handles changes in the input and renders values to the screen 
function handleChange(){
    const res = document.getElementById('demo')
    res.innerHTML = rating.value
}

