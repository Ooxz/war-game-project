let computerScore = 0
let playerScore = 0
const btn = document.getElementById("btn");
const drawBtn = document.getElementById("draw-btn");
const cards = document.getElementById("cards");
const result = document.getElementById("result");
const cardRemaining = document.getElementById("card-remaining");
const computerScoreEl = document.getElementById("computer-score")
const playerScoreEl = document.getElementById("player-score")
let deckId;
drawBtn.disabled = true;

drawBtn.addEventListener("click", draw2Cards);
btn.addEventListener("click", handleClick);

async function handleClick() {
  drawBtn.disabled = false;
  const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  const data = await response.json();
    
      deckId = data.deck_id;
	  console.log(deckId)
    cardRemaining.innerHTML =`
		Card remaining: ${data.remaining}
	  `
    
}

function draw2Cards() {

  fetch(
    ` https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
  )
    .then((response) => response.json())
    .then((data) => {
      let index = 0

	  const winnerText = determineCardWinner(data.cards[0], data.cards[1])
	  result.innerHTML = winnerText
	  cardRemaining.innerHTML =`
		Card remaining: ${data.remaining}
	  `
    if(data.remaining === 0) {
      drawBtn.disabled = true;
      if(computerScore > playerScore) {
        result.innerHTML = `Computer wins the game`
      } else if(playerScore > computerScore) {
        result.innerHTML = `You win the game`
      } else {
        result.innerHTML = `It's a draw`
      }
    }  

	  console.log(data.remaining)
      for (const child of cards.children) {
		
        child.innerHTML = `
			<img class="card" src=${data.cards[index++].image}></img>
			`
      }
    });
}

function determineCardWinner(card1, card2) {
  let valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);
  if (card1ValueIndex === card2ValueIndex) {
    return "War";
  } else if (card1ValueIndex > card2ValueIndex) {
    computerScore++
    computerScoreEl.innerHTML = `Computer Score: ${computerScore}`
    return "Computer wins";
  } else if (card1ValueIndex < card2ValueIndex) {
    playerScore++
    playerScoreEl.innerHTML = `Player Score: ${playerScore}`
    return "You win";
  }
}

