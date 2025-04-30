export const renderHomePage = function() {
	const homeDiv = document.createElement('div')
	homeDiv.className = 'homepage'
		const messageDiv = document.createElement('div')
		messageDiv.className = 'message'
			const introDiv = document.createElement('div')
			introDiv.className = 'intro'
				const greetingTag = document.createElement('p')
				greetingTag.innerText = 'Welcome to'
				introDiv.appendChild(greetingTag)
				const brandTag = document.createElement('h3')
				brandTag.innerText = 'Sumbo Kitchen' 
				introDiv.appendChild(brandTag)
			messageDiv.appendChild(introDiv)
			const mottoDiv = document.createElement('div')
			mottoDiv.className = 'motto'
				const mottoTag = document.createElement('p')
				mottoTag.innerText = 'Where Food is more than a need, it is a lifestyle'
				mottoDiv.appendChild(mottoTag)
			messageDiv.appendChild(mottoDiv)
		homeDiv.appendChild(messageDiv)
	return homeDiv
}