function init(){
    //Main Counter 
   const counterElement = document.querySelector('#counter')
   let counterValue = parseInt(counterElement.innerHTML)
    
   //Calls the function addToCounter every 1 second
   setInterval(addToCounter, 1000)

   //Function that increments the value of the counter by 1/one.
   function addToCounter(){
    counterValue += 1
    counterElement.innerHTML = counterValue.toString()
   }

   //Function that decreases the value of the counter by 1/one.
   function subtract(){
    counterValue -= 1
    counterElement.innerHTML = counterValue.toString()
   }

   //Grabs the plus button and adds an event listener for when the button is clicked. Calls addToCounter to manually add 1/one to counter
   const plusButton = document.querySelector('#plus')
   plusButton.addEventListener('click', addToCounter)

   // Grabs the minus button and add an event listener for when the button is clicked. Calls substract to manually substract 1/one to the counter.
   const minusButton = document.querySelector('#minus')
   minusButton.addEventListener('click', subtract)

   const arrayOfNumbersLiked = []
   // Grabs the like button
   const likeButton = document.querySelector('#heart')
   //Add an event listener to the like button
   likeButton.addEventListener('click', function(){
    //Save the number that was liked
    let likedNumber = counterValue
    
    if(!arrayOfNumbersLiked.includes(likedNumber)){
        arrayOfNumbersLiked.push(likedNumber)
    //Grab the ul tag for the area where the liked text will be shown
    const likesSection = document.querySelector('.likes')
    

    //Create li tag and add text value to the tag. Append li tag to the ul tag
    let liTag = document.createElement('li')
    
    
    liTag.innerHTML = `You Liked Number ${likedNumber}, times`
    likesSection.appendChild(liTag)
    } 
})

   
}

document.addEventListener("DOMContentLoaded", init)