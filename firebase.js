
function registrar(){
    var email = document.getElementById('email').value;
    var contrasenia = document.getElementById('contrasenia').value;


  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, contrasenia)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
