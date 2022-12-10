const breakfastBttn = document.querySelector('#br_button')
breakfastBttn.addEventListener('click', fetchRec())
const lunchBttn = document.querySelector('#lu_button')
lunchBttn.addEventListener('click',()=>{
    console.log('I was clicked')
})
const dinnerBttn = document.querySelector('#dn_button')
dinnerBttn.addEventListener('click',()=>{
    console.log('I was clicked')
})
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert("Thank you for subscribing!")
    form.reset()
})

function fetchRec(){
     fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(obj => console.log(obj))
}
