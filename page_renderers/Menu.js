import {recommendedFoods, menu} from '../foodStore.js'

const displayFood = function (foods){
	const displayDiv = document.createElement('div')
	displayDiv.className = 'display'
	for (let food of foods){
		const dishDiv = document.createElement('div')
		dishDiv.className = 'dish'
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
	return displayDiv
}

const renderRecommendationDiv = function(food) {
	const recommendationDiv = document.createElement('div');
	recommendationDiv.className = 'recommendations';
	const recommendationsHeading = document.createElement('h3');
	recommendationsHeading.innerText = 'Recommendations for you';
	recommendationDiv.appendChild(recommendationsHeading);
	const recommendationDisplayDiv = displayFood(food);
	recommendationDiv.appendChild(recommendationDisplayDiv);
	return recommendationDiv
}

const renderMainMenuDiv = function(food) {
	const mainMenuDiv = document.createElement('div')
	mainMenuDiv.className = 'main-menu'
	const mainMenuHeading = document.createElement('h3');
	mainMenuHeading.innerText = 'Menu'
	mainMenuDiv.appendChild(mainMenuHeading)
	const mainMenuDisplay = displayFood(food)
	mainMenuDiv.appendChild(mainMenuDisplay)
	return mainMenuDiv
}

export const renderMenuPage = function() {
	const menuDiv = document.createElement('div');
	menuDiv.id = 'menupage'
	const recommendationDiv = renderRecommendationDiv(recommendedFoods)
	const mainMenuDiv = renderMainMenuDiv(menu)
	menuDiv.appendChild(recommendationDiv)
	menuDiv.appendChild(mainMenuDiv)
	return menuDiv
}

