console.log('Connected')
import {renderMenuPage} from './page_renderers/Menu.js'

const contentDiv = document.querySelector('#content')
const menuPage = renderMenuPage()
contentDiv.appendChild(menuPage)
