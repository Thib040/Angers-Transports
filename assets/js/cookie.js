var email;
var psw;

function setCookie(cname, cvalue) {
    var exdays = 365;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
  
function checkCookie(account) {
    var user = getCookie(account);
    if (user != "") {
        alert("Bienvenue");
        document.getElementById("log").innerHTML = "Vous etes connecté";
        var submitButton = document.getElementById('log');
        submitButton.setAttribute('onclick',  'logOut()');
        closeFormLogin()
    } 
    else {
        alert("Nom de compte ou mot de passe incorect");
    }
}

function log() {
    email = document.getElementById("emailLogin").value;
    psw = document.getElementById("pswLogin").value;
    var account = (email + psw); 
    checkCookie(account);
}

function logOut() {
    var mydate = new Date();
    mydate.setTime(mydate.getTime() + (0));
    var expires = "expires="+mydate.toUTCString();
    document.cookie = "username=; expires=" + expires;
    alert("Vous êtes déconnecté");
    var submitButton = document.getElementById('log');
    submitButton.setAttribute('onclick',  'openFormLogin()');
    document.getElementById("log").innerHTML = "Connexion";
}