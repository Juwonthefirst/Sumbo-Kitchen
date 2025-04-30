export const renderContactPage = function() {
	const contentDiv = document.querySelector('#content')
	const contactDiv = document.createElement('div')
	contactDiv.className = 'contact'
		const detailDiv = document.createElement('div')
		detailDiv.className = 'personal-details'
			const contactHeading = document.createElement('h3')
			contactHeading.innerText = 'You can contact us through:'
			detailDiv.appendChild(contactHeading)
			const emailHead = document.createElement('p')
			emailHead.innerText = 'Email:'
			const emailTag = document.createElement('p')
			emailTag.innerHTML = '<ion-icon name="mail-outline"></ion-icon>definitelynotfake@real.com'
			const phoneHead = document.createElement('p')
			phoneHead.innerText = 'Phone:'
			const phoneTag = document.createElement('p')
			phoneTag.innerHTML = '<ion-icon name="call-outline"></ion-icon><a href="tel:+000567897">+000567897</a></p>'
			const locationHead = document.createElement('p')
			locationHead.innerText = 'Or you can visit us at:'
			const locationTag = document.createElement('p')
			locationTag.innerHTML = ''
			detailDiv.append(emailHead, emailTag, phoneHead, phoneTag, locationHead, locationTag)
		contactDiv.appendChild(detailDiv)
	contentDiv.innerText = ''
	contentDiv.appendChild(contactDiv)
}