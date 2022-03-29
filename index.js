let claimTrialButton = document.querySelector('.claim-trial');
let fNameInput = document.querySelector('#fName');
let lNameInput = document.querySelector('#lName');
let eAddressInput = document.querySelector('#emailAddress');
let passwordInput = document.querySelector('#password');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

claimTrialButton.onclick = () => {
	// First Name Check
	if (fNameInput.value == '') {
		fNameInput.classList.remove('empty-input');
		fNameInput.classList.add('error-input');
		document.querySelector('#firstNameError').style.display = 'block';
	}
	
	else {
		fNameInput.classList.add('empty-input');
		fNameInput.classList.remove('error-input');
		document.querySelector('#firstNameError').style.display = 'none';
	}

	// Last Name Check
	if (lNameInput.value == '') {
		lNameInput.classList.remove('empty-input');
		lNameInput.classList.add('error-input');
		document.querySelector('#lastNameError').style.display = 'block';
	}
	
	else {
		lNameInput.classList.add('empty-input');
		lNameInput.classList.remove('error-input');
		document.querySelector('#lastNameError').style.display = 'none';
	}

	// Email Check
	// if correct email format
	if (eAddressInput.value.match(emailFormat)) {
		eAddressInput.classList.add('empty-input');
		eAddressInput.classList.remove('error-input');
		document.querySelector('#emailError').style.display = 'none';
	}

	// if wrong email format
	else {
		eAddressInput.classList.remove('empty-input');
		eAddressInput.classList.add('error-input');
		document.querySelector('#emailError').style.display = 'block';
	}

	// Password Check
	if (passwordInput.value == '') {
		passwordInput.classList.remove('empty-input');
		passwordInput.classList.add('error-input');
		document.querySelector('#passwordError').style.display = 'block';
	}

	else {
		passwordInput.classList.add('empty-input');
		passwordInput.classList.remove('error-input');
		document.querySelector('#passwordError').style.display = 'none';
	}
}