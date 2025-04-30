const Food = function (name, price, img){
	return {name, price, img}
}

const recommendedFoods = [
	Food('Amala', '₦3000', './img/dish.jpeg'),
	Food('Eba', '₦3500', './img/dish1.jpg'),
	Food('Rice', '₦3000', './img/dish2.jpg'),
	Food('Beans', '₦2500', './img/dish3.jpg'),
	Food('Garri', '₦4000', './img/dish.jpeg'),
	Food('Chicken', '₦7000', './img/dish3.jpg')
];

const menu = [
	Food('Amala', '₦3000', './img/dish.jpeg'),
	Food('Eba', '₦3500', './img/dish1.jpg'),
	Food('Rice', '₦3000', './img/dish2.jpg'),
	Food('Beans', '₦2500', './img/dish3.jpg'),
	Food('Garri', '₦4000', './img/dish.jpeg'),
	Food('Chicken', '₦7000', './img/dish3.jpg'),
	Food('Amala', '₦3000', './img/dish.jpeg'),
	Food('Eba', '₦3500', './img/dish1.jpg'),
	Food('Rice', '₦3000', './img/dish2.jpg'),
	Food('Beans', '₦2500', './img/dish3.jpg'),
	Food('Garri', '₦4000', './img/dish.jpeg'),
	Food('Chicken', '₦7000', './img/dish3.jpg')
];

export {recommendedFoods, menu}