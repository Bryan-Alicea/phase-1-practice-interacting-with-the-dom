function init(){

//See the timer increment every second once the page has loaded

//Need to grab the timer element
let counter = document.querySelector('#counter')

let intervalID 

//need to have the time increment by one every second after loading.
function startInterval(){
    intervalID = setInterval(addToCounter, 1000)
}

startInterval()

//need to create function to increment the timer
function addToCounter(){
    let count = parseInt(counter.innerHTML)
    count += 1
    return counter.innerHTML = count.toString()
}

// Manually increment the counter by pressing the plus button

    //Grab the plus button using querySelector
    const plusButton = document.querySelector('#plus')
    //console.log(plusButton)
    //Add an event listener in order to call the function addCounter when the plus button is clicked
    plusButton.addEventListener('click',addToCounter)

//Manually decrease the counter by pressing the minus button

    //Grab the minus button using querySelector
    const minusButton = document.querySelector('#minus')
    //console.log(minusButton)
    //Add event listener in order to call the function substract when the minus button is clicked
    minusButton.addEventListener('click', substract)
    //Create function to substract 1/one from the counter manually
    function substract(){
        let count = parseInt(counter.innerHTML)
        count -= 1
        return counter.innerHTML = count.toString()
    }


    // Grab the like button
    const likeButton = document.querySelector('#heart')
    
    const likeSection = document.querySelector('.likes')
    //console.log(likeSection)
    
    //Array of objects that will hold the numbers liked and the amount of likes a number has
    const numbersLikedCollection = []

    likeButton.addEventListener('click', function(event) {
        let likedNumber = parseInt(counter.innerHTML)
        let id = parseInt(counter.innerHTML)

        //create li tag and add and Id to it
        let liTag = document.createElement('li')
        liTag.id = id.toString()
        //console.log(liTag)

        let foundNumberInLikedCollection = numbersLikedCollection.find((object) => object.number === likedNumber)

        if (!foundNumberInLikedCollection){
            numbersLikedCollection.push({id: id, number: likedNumber, likes: 1})
            liTag.innerHTML = `You liked number ${likedNumber}. Total likes: 1.`
            likeSection.appendChild(liTag)
        } 
        else if(likedNumber === foundNumberInLikedCollection.number){
            foundNumberInLikedCollection.likes++
            let likedNumberTag = document.getElementById(id)
            //console.log(likedNumberTag)
            likedNumberTag.innerHTML = `You liked number ${likedNumber}. Total likes: ${foundNumberInLikedCollection.likes}.`
            liTag = likedNumberTag
            
        }
       
    })

    
   
    //Pause button
    

    //Grab the pause button
    const pauseButton = document.querySelector('#pause')
    
    
    pauseButton.addEventListener('click', (event) => {

        if(pauseButton.innerHTML === ' resume '){
            startInterval()

            pauseButton.innerHTML = ' pause '
            minusButton.disabled = false
            plusButton.disabled = false
            likeButton.disabled = false

        }else if(pauseButton.innerHTML === ' pause '){
            clearInterval(intervalID)

            pauseButton.innerHTML = ' resume '
            minusButton.disabled = true
            plusButton.disabled = true
            likeButton.disabled = true
        }
      
    })

    const commentForm = document.querySelector("#comment-form")
    const commentInput = document.querySelector('#comment-input')
    const commentSection = document.querySelector('div #list')
    console.log(commentSection)

    commentForm.addEventListener('submit', function(event){
        event.preventDefault()
        const comment = commentInput.value 
        let liTag = document.createElement('li')
        liTag.textContent = comment
        commentSection.appendChild(liTag)
        
    })

}

document.addEventListener('DOMContentLoaded', init)