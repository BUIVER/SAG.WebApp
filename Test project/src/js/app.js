
(function () {
  console.log("CP1");
  const APP_ID = '46284BB8-81C2-7920-FFD0-9A863DCEB500';
  const API_KEY = 'AEBF1473-2F6B-21F8-FF14-857162D9E400';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);

  const testTableStore = Backendless.Data.of('TestTable');

  const $createObjStatusMsg = document.getElementById('create-obj-status');
  const $modifierPanel = document.getElementById('modifier-panel');
  const $currentValue = document.getElementById('current-value');
  const $login = document.getElementById('Login');
  const $password = document.getElementById('Password');
  const $updateBtn = document.getElementById('update-btn');
  const $userTag = document.getElementById('current-user');

  var user;

  function getUser() {
    Backendless.UserService.getCurrentUser()
     .then( function( currentUser ) {
      user = currentUser;
        createObject()
        .then(onObjectCreate)
      })
    return user;

  }

  function createObject() {
<<<<<<< HEAD

    return testTableStore.save({ foo: '' })
=======
    const object = {
      login: $login.value,
      password  :  $password.value
    };
    return testTableStore.save({object})
>>>>>>> origin/develop
      .then(function (object) {
        $createObjStatusMsg.classList.add('text-success');
        $createObjStatusMsg.innerText = 'Object has been saved in real-time database';

        return object;
      })
      .catch(function (error) {
        $createObjStatusMsg.classList.add('text-danger');
        $createObjStatusMsg.innerText = error.message;

        throw error;
      });
  }

  function updateObjectValue(object) {
    $currentValue.innerText = object.login
  }

  function subscribeOnObjectChanges(object) {
    testTableStore.rt().addUpdateListener("objectId = '" + object.objectId + "'", updateObjectValue);
  }

  function onEnter(callback) {
    return function onKeyPress(e) {
      if (e.keyCode === 13) {
        callback()
      }
    }
  }

  function onObjectCreate(object) {
    $modifierPanel.classList.remove('d-none');

    $updateBtn.addEventListener('click', saveObject);
    $input.addEventListener('keypress', onEnter(saveObject));

    updateObjectValue(object);
    subscribeOnObjectChanges(object);

    $userTag.innerText = user.name;

    function saveObject() {
      object.login = $login.value
      object.password = $password.value;
      $login.value = '';
      $password.value = '';
      $input.value = '';

      testTableStore.save(object);
    }
  }

  getUser()
})();
                