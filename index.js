import {renderMenuPage} from './page_renderers/Menu.js'
import {renderHomePage} from './page_renderers/homepage.js'
import {renderContactPage} from './page_renderers/Contact.js'


const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn')
const contactBtn = document.querySelector('#about-btn')

homeBtn.addEventListener('click', renderHomePage)

menuBtn.addEventListener('click', renderMenuPage)

contactBtn.addEventListener('click', renderContactPage)

//homeBtn.click()