const btn = document.getElementById('btn');
const drawBtn = document.getElementById('draw-btn');
const cards = document.getElementById('cards');
let deckId
drawBtn.disabled = true

drawBtn.addEventListener('click', draw2Cards)
btn.addEventListener('click', handleClick)

function handleClick() {
	drawBtn.disabled = false
	fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
	.then(response => response.json())
	.then(data => {
		deckId = data.deck_id
	})
}

function draw2Cards() {
	drawBtn.disabled = true
	fetch(` https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
	.then(response => response.json())
	.then(data => {
		let index = 0
		for(const child of cards.children) {
			child.innerHTML = `
			<img class="card" src=${data.cards[index++].image}></img>
			`
		}
		
		
	})
}

function determineCardWinner(card1, card2) {
	let valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
	const card1ValueIndex = valueOptions.indexOf(card1.value)
	const card2ValueIndex = valueOptions.indexOf(card2.value)
	if (card1ValueIndex === card2ValueIndex) {
		console.log("Draw")
	} else if (card1ValueIndex > card2ValueIndex) {
		console.log("Player 1 win")
	} else if (card1ValueIndex < card2ValueIndex) {
		console.log("Player 2 win")
	}

}

const card1Obj = {
	value: "7"
}

const card2Obj = {
	value: "KING"
}

determineCardWinner(card1Obj, card2Obj)