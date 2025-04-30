import {renderMenuPage} from './page_renderers/Menu.js'
import {recommendedFoods, menu} from './foodStore.js'

const contentDiv = document.querySelector('#content')
const homeBtn = document.querySelector('#home-btn')
const menuBtns = document.querySelectorAll('.menu-btn')
const contactBtn = document.querySelector('#about-btn')
homeBtn.addEventListener('click', () => {
	contentDiv.innerHTML = ''
	
})

menuBtns.forEach((button) => {
	button.addEventListener('click', () => {
		contentDiv.innerHTML = ''
		const menuPage = renderMenuPage(recommendedFoods, menu)
		contentDiv.appendChild(menuPage)
	})
})

contactBtn.addEventListener('click', () => {
	contentDiv.innerHTML = ''
})