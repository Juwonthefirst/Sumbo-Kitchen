import {renderMenuPage} from './page_renderers/Menu.js'
import {renderHomePage} from './page_renderers/homepage.js'
//import {renderContactPage} from './page_renderers/Contact.js'

const contentDiv = document.querySelector('#content')
const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const contactBtn = document.querySelector('#about-btn')

const displayPage = function(pageRender) {
	contentDiv.innerHTML = ''
	contentDiv.appendChild(pageRender())
}

homeBtn.addEventListener('click', () => {
	displayPage(renderHomePage)
})

menuBtn.addEventListener('click', () => {
	displayPage(renderMenuPage)
})

contactBtn.addEventListener('click', () => {
	displayPage(renderContactPage)
})

homeBtn.click()