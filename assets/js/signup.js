// selecteur checkbox
$("input:checkbox").on('click', function() {
    var box = $(this);
    if (box.is(":checked")) {
        var group = "input:checkbox[name='" + box.attr("name") + "']";
        $(group).prop("checked", false);
        box.prop("checked", true);
    } else {
        box.prop("checked", false);
    }
});

var email;
var psw;
var nom;
var prenom;
var date;
var sexe;
var deplacement;
var transports;
var data;
var account;

function checkPattern(element) {
    var elem = document.getElementById(element);
    if (element == "nom" || element == "prenom") {
       var re = /[A-Za-zÀ-ÿ]{2,36}/;
    }
    else if (element == "emailSignUp") {
       var re = /[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
    }
    else if (element == "pswSignUp") {
        var re = /[A-Za-zÀ-ÿ0-9._!?+-]{4,20}/;
    }
    else if (element == "date") {
        var re = /[\d{1,2}/\d{1,2}/\d{4}]/;
    }
    else {
        return false;
    }
    console.log(re.test(elem.value));
    return re.test(elem.value);
}

function checkValue(formValue) {
    var checkBoxValue = $('.'+ formValue +':checked').val();
    if (checkBoxValue != "") {
        return checkBoxValue;
    }
    else {
        return "Non renseigné";
    }
}

function openSignUpPage0() {
    document.getElementById("signup-p1").style.right = "-325px";
}

function openSignUpPage1() {
    email = document.getElementById("emailSignUp").value;
    psw = document.getElementById("pswSignUp").value;
    if (checkPattern("emailSignUp") == true && checkPattern("pswSignUp") == true) {
        document.getElementById("signup-p2").style.right = "-1px";
        document.getElementById("signup-p3").style.right = "-325px";
        resetMap();
    }
    else {
        alert("Il manque des informations ou elles sont incorrectes");
    }
}

function openSignUpPage2() {
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    date = document.getElementById("date").value;
    if (checkPattern("nom") == true && checkPattern("prenom") == true && checkPattern("date") == true) {
        document.getElementById("signup-p3").style.right = "-1px";
        document.getElementById("signup-p4").style.right = "-325px";
        resetMap();
    }
    else {
        alert("Il manque des informations ou elles sont incorrectes");
    }
}

function openSignUpPage3() {
    sexe = checkValue("checkbox1");
    document.getElementById("signup-p4").style.right = "-1px";
    document.getElementById("signup-p5").style.right = "-325px";
	resetMap();
}

function openSignUpPage4() {
    deplacement = checkValue("checkbox2");
    document.getElementById("signup-p5").style.right = "-1px";
    document.getElementById("signup-p6").style.right = "-325px";
	resetMap();
}

function openSignUpPage5() {
    transports = checkValue("checkbox3");
    document.getElementById("champ1").innerHTML = email;
    document.getElementById("champ2").innerHTML = psw;
    document.getElementById("champ3").innerHTML = nom;
    document.getElementById("champ4").innerHTML = prenom;
    document.getElementById("champ5").innerHTML = date;
    document.getElementById("champ6").innerHTML = sexe;
    document.getElementById("champ7").innerHTML = deplacement;
    document.getElementById("champ8").innerHTML = transports;
    document.getElementById("signup-p6").style.right = "-1px";
	resetMap();
}

function openSignUpPage6() {
    //data = (email + ";" + psw + ";" + nom + ";" + prenom + ";" + date + ";" + sexe + ";" + deplacement + ";" + transports);
    account = (email + psw);
    setCookie(account);
    document.getElementById("btnSignUp").innerHTML = "&#10004";
    setTimeout(function(){
        document.getElementById("signup-p6").style.right = "-325px";
        setTimeout(function(){
            document.getElementById("btnSignUp").innerHTML = "Send";
        },900);
    },2000);
    document.getElementById("signup-p1").style.right = "-325px";
    document.getElementById("signup-p2").style.right = "-325px";
    document.getElementById("signup-p3").style.right = "-325px";
    document.getElementById("signup-p4").style.right = "-325px";
    document.getElementById("signup-p5").style.right = "-325px";
    resetMap();
}