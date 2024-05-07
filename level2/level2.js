// flipping the cards
const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard, secondCard
function flipCard() {
  this.classList.toggle('flip')

  this.classList.add('flip')

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
    remCards()
  } else {
    unflipCards()
  }
}
function remCards() {
  firstCard.removeEventlistener('click', flipCard)
  secondCard.removeEventlistener('click', flipCard)
}
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 400)
}
cards.forEach((card) => card.addEventListener('click', flipCard))

// Timer
let timer = Date.now() + 30 * 1000

// Update timer after each second
let t = setInterval(function () {
  // Get the current time
  let now = Date.now()

  // Calculate remaining time
  let rem = timer - now

  // Calculate remaining seconds
  let sec = Math.floor((rem % (1000 * 60)) / 1000)

  // Display remaining seconds in the timer element
  document.querySelector('.timer').innerHTML = sec

  // If timer has finished move to level 2
  if (rem <= 0) {
    clearInterval(t) // Stop the timer interval
    window.location.href = ''
  }
}, 1000) // Update timer every second
