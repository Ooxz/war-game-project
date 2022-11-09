const btn = document.getElementById('btn');
let deckId

btn.addEventListener('click', handleClick)

function handleClick() {
	fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
	.then(response => response.json())
	.then(data => {
		deckId = data.deck_id
	})
}

setTimeout(callback, 2000)

function callback() {
	console.log("I finaly ran")
}
