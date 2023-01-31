let recipes
const cardCollection = document.querySelector('#card_collection')
function fetchRecipes(){
    fetch('http://localhost:3000/recipes')
    .then(res=>res.json())
    .then(recipesArray=> {
      recipes = recipesArray
    })
    
}
function appendFood(recipe){
    let card =document.createElement('div')
    card.className='cards'
    card.innerHTML= `
    <div class="initial_box">
        <div class="info_box">
        <h4>${recipe.title}</h4>
        <p><b>Ingredients</b>: ${recipe.ingredients}</p>
        <p><b>Description</b>: ${recipe.description}
        <br>
        <p id="like-count">0 Likes</p>
        <button id="like_button">Like</button>
    </div>
     <img src="${recipe.image}" alt="Photo with"">
</p>
</div>`
const likeCount = card.querySelector('#like-count')
const likeBttn = card.querySelector('#like_button')
let counter = 0
likeBttn.addEventListener('click', ()=>{
    counter=counter+1
    likeCount.textContent= counter + ' Likes'
})

cardCollection.appendChild(card)
}
function filterButtonFunction(e){
       cardCollection.innerHTML=''
       if(e.target.name !== "home"){
        const recipesArray = recipes.filter(recipe => recipe.meal ===e.target.name)
        recipesArray.forEach(recipe => appendFood(recipe))
       }
        
}



document.addEventListener('DOMContentLoaded', ()=>{
fetchRecipes()
//universal callback function

//breakfast bttn
const breakfastBttn = document.querySelector('#br_button')
breakfastBttn.addEventListener('click',filterButtonFunction)

//lunch bttn
const lunchBttn = document.querySelector('#lu_button')
lunchBttn.addEventListener('click',filterButtonFunction)
//dinner bttn
const dinnerBttn = document.querySelector('#dn_button')
dinnerBttn.addEventListener('click', filterButtonFunction)
//new function


//home button
const homeButton = document.querySelector('#homeBttn')
homeButton.addEventListener('click', filterButtonFunction)

//like bttn

//submit eventListener
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    alert("Thank you for subscribing!")
    form.reset()
})

})
