$(document).ready(function () {
	let displayFocus = null
	const displayLogin = $('[data-js-display-login]')
	const displayPassword = $('[data-js-display-password]')
	const keyboard = $('[data-js-keyboard]')
	const keyboardClearButton = keyboard.find('[data-js-keyboard-clear]')
	const keyboardDelButton = keyboard.find('[data-js-keyboard-del]')

	displayLogin.mask('+380 (00) 000-00-00')

	function updateVal(newVal) {
		if (!displayFocus) return
		displayFocus.val(newVal)
		displayFocus.trigger('input')
	}

	function setActiveField($input) {
		$('.num-auth-form__row').removeClass('is-focus')
		displayFocus = $input
		$input.parent('.num-auth-form__row').addClass('is-focus')
	}

	displayLogin.on('focus click', function () {
		setActiveField($(this))
	})

	displayPassword.on('focus click', function () {
		setActiveField($(this))
	})

	keyboard.on('click', '[data-js-keyboard-num]', function () {
		if (!displayFocus) setActiveField(displayLogin)

		const currentVal = displayFocus.val()
		const newVal = currentVal + $(this).text()
		updateVal(newVal)
	})

	keyboardClearButton.on('click', function () {
		if (!displayFocus) return
		updateVal('')
	})

	keyboardDelButton.on('click', function () {
		if (!displayFocus) return
		const val = displayFocus.val()
		updateVal(val.slice(0, -1))
	})

	$(document).on('click', function (e) {
		if (
			displayFocus &&
			!$(e.target).closest('[data-js-display-login]').length &&
			!$(e.target).closest('[data-js-display-password]').length &&
			!$(e.target).closest('[data-js-keyboard]').length
		) {
			$('.num-auth-form__row').removeClass('is-focus')
			displayFocus = null
		}
	})
})
