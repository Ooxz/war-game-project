const btn = document.getElementById('btn');
const drawBtn = document.getElementById('draw-btn');
const demo = document.getElementById('cards');
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
		console.log(deckId)
	})
}

function draw2Cards() {
	drawBtn.disabled = true
	fetch(` https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
	.then(response => response.json())
	.then(data => {
		console.log(data.cards)
		demo.innerHTML = `
		<img src=${data.cards[0].image}></img>
		<img src=${data.cards[1].image}></img>
		`
		
	})
}

