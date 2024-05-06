// flipping the cards
const cards = document.querySelectorAll('.card')
function flipCard() {
  this.classList.toggle('flip')
  this.classList.add('flip')
}
cards.forEach((card) => card.addEventListener('click', flipCard))

//matching the cards
let hasFlippedCard = false
let lockClick = false
let firstCard, secondCard

function flipCard() {
  if (lockClicks || this === firstCard) return
  this.classList.add('flip')
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
  } else {
    secondCard = this
    checkForMatch()
  }
}
