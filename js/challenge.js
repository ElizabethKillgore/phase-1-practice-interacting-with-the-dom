

const counter = document.getElementById('counter')
console.log("counter", counter)

let intervalID = setInterval(incrementCounter, 1000)

const plusButton = document.getElementById('plus')
 plusButton.addEventListener("click", incrementCounter)

function incrementCounter(){
    counter.innerText++
}

const minusButton = document.getElementById('minus')
minusButton.addEventListener("click", decrementCounter)

function decrementCounter(){
    counter.innerText--
}
    
const pauseButton = document.getElementById('pause')
pauseButton.addEventListener("click", pauseTimer)

function pauseTimer() {
    
    if (pauseButton.innerText === 'pause') {
        console.log('pause')
        clearInterval(intervalID)
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true  
        
        pauseButton.innerText = 'resume' 
    }
    else {
        pauseButton.innerText = 'pause'
         intervalID = setInterval(incrementCounter, 1000)
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false    
}
}

const heartButton = document.getElementById('heart')
heartButton.addEventListener("click", likeNumber)

function likeNumber(e) {  
   let numbersLiked = document.createElement('li')
   numbersLiked.innerText = counter.innerText
   let likesContainer = document.querySelector('.likes')
   likesContainer.append(numbersLiked)     
}

const commentBox = document.getElementById('button#submit') 
document.querySelector('form').addEventListener('submit', (e) => {
e.preventDefault()
let commentVehicle = e.target.children[0].value
let list = document.querySelector('#list')
list.append(commentVehicle) 
})

