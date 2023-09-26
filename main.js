const startPlay = document.querySelector('#startButton');
console.log(startGame);
const endPlay = document.querySelector('#endButton');
const circles = document.querySelectorAll('.circle');// creates NodeList, simplified array. It is just collections of elements.
const scoreDisplay = document.querySelector('.score');

//global variables
let score = 0;// to store our scores
let timer;
let pace = 1000;//miliseconds
let active = 0;
let rounds = 0;

function getRundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(getRundomNumber(0, 3));


//To know what button was clicked.     //Every time you click a circle you get a score
const clickCircle = (i) => {
if (i !== active) // if we have smth that is not highlited
{ return endGame() }

console.log('circle was clicked', i);
rounds-- // to be able to make more clicks than 3
score+=10;
scoreDisplay.textContent = score;
}
   // classList.add(endgame)
   // classList.remove(endgame)

   
circles.forEach((circle, i) => { // it can be any name. i = index, in NodeList. Element has a placement which is index. Index can be changed all time. First parameter (circle) for itterate.
    circle.addEventListener('click', () => clickCircle(i))}) // anonymos function inside. function can not be called before the function that was created

    const enableEvents = () => {
        circles.forEach(circle => {
            circle.computedStyleMap.pointEvents = "auto"
        })
    } // none by default

      // it waits for a second and them a new number will be showed. And do it again.
    function startGame() {
if (rounds >= 3) //highlights 
{
    return endGame()
}
enableEvents();

const newActive = pickNew(active) //gives a number and pass to function pickNew(active)
circles[newActive].classList.toggle('active');
circles[active].classList.remove('active');

active = newActive; // overwrite with a new number

timer = setTimeout(startGame, pace)

pace -= 10
rounds++
       function pickNew(active) { //function will get a new number. will be return random number from 0 to 3
        const newActive = getRundomNumber(0, 3);
        console.log(newActive);
        if (newActive !== active) {
            return newActive  
        }
        return pickNew(active) // to loop until it is same
       }
       console.log(active);
    }

// end game
    function endGame() {
        console.log('end');
        clearTimeout(timer)
        resetGame();
    }

    const resetGame = () => {
        // buil-in method
        window.location.reload()
    }
    startPlay.addEventListener('click', startGame);
    endPlay.addEventListener('click', endGame);

  