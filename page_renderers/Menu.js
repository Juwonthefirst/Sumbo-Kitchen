const displayFood = function (foods){
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
	return displayDiv
}

const renderRecommendationDiv = function(recommendedFoods) {
	const recommendationDiv = document.createElement('div');
	recommendationDiv.classList.add('recommendations');
	const recommendationsHeading = document.createElement('h3');
	recommendationsHeading.innerText = 'Recommendations for you';
	recommendationDiv.appendChild(recommendationsHeading);
	const recommendationDisplayDiv = displayFood(recommendedFoods);
	recommendationDiv.appendChild(recommendationDisplayDiv);
	return recommendationDiv
}

const renderMainMenuDiv = function(menu) {
	const mainMenuDiv = document.createElement('div')
	mainMenuDiv.className = 'main-menu'
	const mainMenuHeading = document.createElement('h3');
	mainMenuHeading.innerText = 'Menu'
	mainMenuDiv.appendChild(mainMenuHeading)
	const mainMenuDisplay = renderMenuPage(menu)
	mainMenuDiv.appendChild(mainMenuDisplay)
	return mainMenuDiv
}

export const renderMenuPage = function(recommendedFoods, menu) {
	const menuDiv = document.createElement('div');
	menuDiv.classList.add('menupage');
	const recommendationDiv = renderRecommendationDiv(recommendedFoods)
	const mainMenuDiv = renderMainMenuDiv(menu)
	menuDiv.appendChild(recommendationDiv)
	menuDiv.appendChild(mainMenuDiv)
	return menuDiv
}