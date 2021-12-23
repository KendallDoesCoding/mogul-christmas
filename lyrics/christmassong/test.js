const str = `<div>
  <p>1st p tag</p>
  <p>2nd p tag</p>
</div>`

let doc = new DOMParser().parseFromString(str, 'text/html')

console.log(
  doc.querySelector('p').textContent
)
