console.log('Connected')
import {renderMenuPage} from './page_renderers/Menu.js'
import {recommendedFoods, menu} from './foodStore.js';

const contentDiv = document.querySelector('#content')
const menuPage = renderMenuPage(recommendedFoods, menuf)
contentDiv.appendChild(menuPage)
