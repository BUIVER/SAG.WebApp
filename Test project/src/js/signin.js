
console.log("QWERTY")
const APP_ID = '46284BB8-81C2-7920-FFD0-9A863DCEB500';
const API_KEY = 'AEBF1473-2F6B-21F8-FF14-857162D9E400';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const $login = document.getElementById('username');
const $password = document.getElementById('password');
const $signInButton = document.getElementById('signInButton');

console.log("CP1") //console checkpoint 

	function signIn() {
	var login = $login.value;
	var password = $password.value;

	console.log("CP2")

	$login.value = '';
	$password.value = '';

	Backendless.UserService.login( login, password, true ) //true is default state for stayLoggedIn
		.then( function( loggedInUser ) {
			window.location.href = 'index.html';
	})
		.catch( function( error ) {
			console.log(error);
			console.log("CP4");
	});
}

console.log("CP5");

function onObjectCreate() {
	$signInButton.addEventListener('click', signIn);
	console.log("CP6");
}

console.log("CP7");
onObjectCreate();

