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

// // Timer
let timer = Date.now() + 40 * 1000

// Update the timer after each second
let t = setInterval(function () {
  let now = Date.now()

  let rem = timer - now

  // for remaining seconds
  let sec = Math.floor((rem % (1000 * 60)) / 1000)

  document.querySelector('.timer').innerHTML = sec

  if (rem <= 0) {
    clearInterval(t) // Stop the timer interval
    window.location.href = 'levels/level2.html'
  }
}, 1000) // Update timer every second

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
