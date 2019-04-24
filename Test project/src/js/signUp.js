(function () {
  const APP_ID = '46284BB8-81C2-7920-FFD0-9A863DCEB500';
  const API_KEY = 'AEBF1473-2F6B-21F8-FF14-857162D9E400';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);

  const $signupBtn = document.getElementById('signup-btn');
  const $email = document.getElementById('email')
  const $login = document.getElementById('login')
  const $password = document.getElementById('password')
  const $errorHandler = document.getElementById('errrorHandler')

function signUp(){
    var user = new Backendless.User();
    user.email = $email.value;
    user.password = $password.value;
    user.name = $login.value
    Backendless.UserService.register( user )
    .then( function( registeredUser ) {
        userRegistered(registeredUser)
      })
    .catch( function( error ) {
        gotError(error)
      });
}
function userRegistered( user )
{
  console.log( "user has been registered" );
}

function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( "error code - " + err.statusCode );
  $errorHandler.value = err.message
}
  function addListener(){
      $signupBtn.addEventListener('click', signUp)
  }
  addListener()
})();
