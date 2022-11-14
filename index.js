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

