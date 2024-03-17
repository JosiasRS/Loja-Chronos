function abrirLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function fecharLogin() {
    document.getElementById('loginModal').style.display = 'none';
}
function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;

}

function isEmailValid() {
    const email = document.getElementById('email').value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }else{
        return true;
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password")
}
function login(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}
function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}
function registrar(){
    window.location.href = "registro.html";
}   