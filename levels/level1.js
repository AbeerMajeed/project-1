// flipping the cards
const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard, secondCard
function flipCard() {
  this.classList.toggle('flip')

  // click on two cards

  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
  } else {
    hasFlippedCard = false
    secondCard = this

    checkMatch()
  }
}
//check card match
function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    // remCards
    firstCard.removeEventlistener('click', flipCard)
    secondCard.removeEventlistener('click', flipCard)
  } else {
    // unflipCards()
    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    }, 400)
  }
}

cards.forEach((card) => card.addEventListener('click', flipCard))

let time = Date.now() + 5 * 1000

// Update timer after each second
let t = setInterval(function () {
  // Get the current time
  let now = Date.now()

  // Calculate remaining time
  let r = time - now

  // Calculate remaining seconds
  let s = Math.floor((r % (1000 * 60)) / 1000)

  // Display remaining seconds in the timer element
  document.querySelector('.timer').innerHTML = s

  // If timer has finished move to level 2
  if (r <= 0) {
    clearInterval(t) // Stop the timer interval
    showLoserMessage()
    // Function to display "Loser" message

    // window.location.href = '/levels/level3.html'
  }
}, 1000) // Update timer every second

function showLoserMessage() {
  const resultMessageElement = document.getElementById('resultMessage')
  resultMessageElement.textContent = ' you lost. Try again!'
}

//shuffle cards
const cardsContainer = document.querySelector('.container')

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const shuffledCards = shuffleArray(Array.from(cards))
cardsContainer.innerHTML = ''
shuffledCards.forEach((card) => {
  cardsContainer.appendChild(card)
})

shuffledCards.forEach((card) => {
  card.addEventListener('click', flipCard)
})
