// flipping the cards

const cards = document.querySelectorAll('.card')
let isFlipped = false
let firstCard, secondCard

function flipCard() {
  this.classList.toggle('flip')

  if (!isFlipped) {
    isFlipped = true
    firstCard = this
  } else {
    isFlipped = false
    secondCard = this

    checkMatch()
  }
}
//check card if match
function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // remove event of flip Cards so no flip again
    firstCard.removeEventlistener('click', flipCard)
    secondCard.removeEventlistener('click', flipCard)
  } else {
    //  unflip so it will be flipped to back face
    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    }, 400)
  }
}

cards.forEach((card) => card.addEventListener('click', flipCard))

let time = Date.now() + 40 * 1000

// Update timer after each second
let t = setInterval(function () {
  // Get the current time
  let now = Date.now()

  // the remain time
  let r = time - now

  // Calculate remaining seconds
  let s = Math.floor((r % (1000 * 60)) / 1000)

  // Display remain seconds in timer
  document.querySelector('.timer').innerHTML = s

  // If timer has finished
  if (r <= 0) {
    clearInterval(t) // Stop the timer interval
    showLoserMessage()
  }
}, 1000) // Update timer every second
function showLoserMessage() {
  const resultMessageElement = document.getElementById('resultMessage')
  resultMessageElement.textContent = ' you lost. Try again!'
}

//shuffle cards
const cardsContainer = document.querySelector('.container')
// takes an array and shuffle elements using algo
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const shuffledCards = shuffleArray(Array.from(cards))
cardsContainer.innerHTML = '' //clear container cards
//show the shuffled cards
shuffledCards.forEach((card) => {
  cardsContainer.appendChild(card) //adding cards to the container
})

shuffledCards.forEach((card) => {
  card.addEventListener('click', flipCard)
})
