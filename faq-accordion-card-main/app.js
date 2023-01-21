const questions = document.querySelectorAll('.question')

questions.forEach(question => {
	question.addEventListener('click', function () {
		let answer = this.nextElementSibling
		if (answer == null) {
			answer = this.parentElement.querySelector('.answer')
		}

		answer.classList.toggle('show')
	})
})
