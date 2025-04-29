export const name = 'Hello from Menu.js'
console.log(name)

export const renderMenuPage = function(foods) {
	const menuDiv = document.createElement('div');
	menuDiv.classList.add('menupage');
	const recommendationDiv = document.createElement('div');
	recommendationDiv.classList.add('recommendations');
	const heading = document.createElement('div');
	heading.innerText = 'Recommendations for you';
	recommendationDiv.appendChild(heading)
	const displayDiv = document.createElement('div')
	displayDiv.classList.add('display')
	for (food of foods){
		const dishDiv = document.createElement('div')
		dishDiv.classList.add('dish')
			const dishImg = document.createElement('img')
			dishImg.src = food.img
			dishDiv.appendChild(dishImg)
			const foodInfoDiv = document.createElement('div');
			foodInfoDiv.className = 'food-info'
				const foodNameTag = document.createElement('p');
				foodNameTag.className = 'food-name'
				foodNameTag.innerText = food.name
				foodInfoDiv.appendChild(foodNameTag)
				const foodPriceTag = document.createElement('p');
				foodPriceTag.className = 'food-price'
				foodPriceTag.innerText = food.price
				foodInfoDiv.appendChild(foodPriceTag)
			dishDiv.appendChild(foodInfoDiv)
		displayDiv.appendChild(dishDiv)
		
	}
}