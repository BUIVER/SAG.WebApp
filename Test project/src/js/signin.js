(function (){
  const APP_ID = '46284BB8-81C2-7920-FFD0-9A863DCEB500';
  const API_KEY = 'AEBF1473-2F6B-21F8-FF14-857162D9E400';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);

  const $login = document.getElementById('username');
  const $password = document.getElementById('password');
  const $signInButton = document.getElementById

  function onObjectCreate(object) {
    

    $signInButton.addEventListener('click', signIn);

    updateObjectValue(object);
    subscribeOnObjectChanges(object);

  }

  function signIn() {
      var login = $login.value;
      var password = $password.value;

      $login.value = '';
      $password.value = '';

      Backendless.UserService.login( login, password, stayLoggedIn )
	 .then( function( loggedInUser ) {
	 	console.log(loggedInUser)
	   })
	 .catch( function( error ) {
	 	console.log(error)
	   });
    }

  onObjectCreate()
})