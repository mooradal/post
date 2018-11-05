var btn = document.getElementById('sign-in');
var provider = new firebase.auth.GoogleAuthProvider();
var serverURL = 'http://localhost:4000/posts';
btn.addEventListener('click',() => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        fetch(serverURL, {
          method:'POST',
          body:JSON.stringify(user),
          headers: {
            'content-type':'application/json'
          }
        }).then(res => console.log(''))
        .then(json => console.log(json));
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        console.log(errorCode);
      });
});