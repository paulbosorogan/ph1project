document.addEventListener('DOMContentLoaded', ()=>{


//breakfast bttn
const breakfastBttn = document.querySelector('#br_button')
breakfastBttn.addEventListener('click', ()=>{
    document.querySelector('#card_collection').innerHTML=''
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(obj => obj.forEach(recipe => {
        if(recipe.meal ==='breakfast')
        appendFood(recipe)}))
})
        
//lunch bttn
const lunchBttn = document.querySelector('#lu_button')
lunchBttn.addEventListener('click',()=>{
    document.querySelector('#card_collection').innerHTML=''
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(obj => obj.forEach(recipe => {
        if(recipe.meal ==='lunch')
        appendFood(recipe)}))
})
//dinner bttn
const dinnerBttn = document.querySelector('#dn_button')
dinnerBttn.addEventListener('click', ()=>{
    document.querySelector('#card_collection').innerHTML=''
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(obj => obj.forEach(recipe => {
        if(recipe.meal ==='dinner')
        appendFood(recipe)}))
})
//home button
const homeButton = document.querySelector('#homeBttn')
homeButton.addEventListener('click', ()=>{
    document.querySelector('#card_collection').innerHTML=''
})

//submit eventListener
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert("Thank you for subscribing!")
    form.reset()
})

function appendFood(recipe){
    let card =document.createElement('div')
    card.className='cards'
    card.innerHTML= `
    <div class="initial_box">
        <div class="info_box">
        <h4>${recipe.title}</h4>
        <p><b>Ingredients</b>: ${recipe.ingredients}</p>
        <p><b>Description</b>: ${recipe.description}
    </div>
     <img src="${recipe.image}" alt="Photo with"">
</p>
</div>`

    document.querySelector('#card_collection').appendChild(card)
}
})