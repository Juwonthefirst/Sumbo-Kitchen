import {recommendedFoods, menu} from './foodStore.js'
import {renderMenuPage} from './page_renderers/Menu.js'
import {renderHomePage} from './page_renderers/homepage.js'
import {renderContactPage} from './page_renderers/Contact.js'

const contentDiv = document.querySelector('#content')
const homeBtn = document.querySelector('#home-btn')
const menuBtns = document.querySelectorAll('.menu-btn')
const contactBtn = document.querySelector('#about-btn')

const displayPage = function(pageRender) {
	contentDiv.innerHTML = ''
	contentDiv.appendChild(pageRender)
}

homeBtn.addEventListener('click', () => {
	displayPage(renderHomePage())
})

menuBtns.forEach((button) => {
	button.addEventListener('click', () => {
		displayPage(renderMenuPage(recommendedFoods, menu))
	})
})

contactBtn.addEventListener('click', () => {
	displayPage(renderContactPage())
})