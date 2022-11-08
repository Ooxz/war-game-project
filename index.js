const btn = document.getElementById('btn');

btn.addEventListener('click', handleClick)

function handleClick() {
	fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
}

// setTimeout(callback, 2000)

// function callback() {
// 	console.log("I finaly ran")
// }

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

// const peopleWithPets = people.filter(person => person.hasPet);
// console.log(peopleWithPets)

// function filterArray(array, callback) {
//     const resultingArray = []
//     // Write your filtering logic here
//     for(let item of array) {
//        const shouldBeIncluded = callback(item)
// 	   resultingArray.push(shouldBeIncluded)
//     }
// 	return resultingArray
// }

const lol = [5, 6]

function lolfunction(l, callback) {
    const result = []
    for(item of l) {
        const shouldBeIncluded = callback(item)
        result.push(shouldBeIncluded)
    }
}
const letsgo = lolfunction(lol, function(number) {
    return number * 2
})

console.log(letsgo)