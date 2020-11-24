// Fonction qui run son contenu au chargement de la page
let map = L.map('mapid', {center: [47.493245, -0.551346], zoom: 14});
let tramMap = new Map();
let busMap = new Map();
let arretMapArd = new Map();
let arretMapRos = new Map();

window.onload = function ()
{
	initMap();
}



// Initialisation de la carte
function initMap() {
	// Coordonnées de Angers
	// Définition du fond de carte
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(map);

	L.control.scale().addTo(map);

	// Définition des fonds de carte
	let baselayers = {
		osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
		otm: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
	};
	// Ajout du fond de carte par défaut
	baselayers.osm.addTo(map);
	// Ajout des boutons radios à la carte
	L.control.layers(baselayers).addTo(map);

}

// Reinitialise la carte (fonction de debug)
function resetMap() {
	// map.off();
	// map.remove();
	//initMap()
}

// Variables d'état
var formHome = false;
var formContact = false;
var formLogin = false;
var formTramway = false;
var formBus = false;

// Menu "Home"
function openFormHome() {
	if (formHome == false) {
		document.getElementById("home").style.display = "block";
		document.getElementById("mapid").style.left = "100%";
		document.getElementById("mapid").style.right = "0px";
		document.getElementById("contact").style.left = "-325px";
		document.getElementById("contact").style.display = "block";
		document.getElementById("login").style.right = "-325px";
		document.getElementById("login").style.display = "block";
		document.getElementById("signup-p1").style.right = "-325px";
		document.getElementById("signup-p1").style.right = "-325px";
		document.getElementById("signup-p2").style.right = "-325px";
		document.getElementById("signup-p3").style.right = "-325px";
		document.getElementById("signup-p4").style.right = "-325px";
		document.getElementById("signup-p5").style.right = "-325px";
		document.getElementById("signup-p6").style.right = "-325px";
		formHome = true;
		formContact = false;
		formLogin = false;
		resetMap();
	}
	else {
		formHome = false;
		closeFormHome();
	}
}
  
function closeFormHome() {
	document.getElementById("mapid").style.left = "0px";
	formContact = false;
	setTimeout(function(){
		document.getElementById("home").style.display = "none";
	},900);
	resetMap();
}

// Formulaire de contact
function openFormContact() {
	if (formContact == false) {
		document.getElementById("contact").style.display = "block";
		document.getElementById("contact").style.left = "-1px";
		document.getElementById("mapid").style.left = "325px";
		document.getElementById("mapid").style.right = "0px";
		document.getElementById("signup-p1").style.right = "-325px";
		document.getElementById("signup-p2").style.right = "-325px";
		document.getElementById("signup-p3").style.right = "-325px";
		document.getElementById("signup-p4").style.right = "-325px";
		document.getElementById("signup-p5").style.right = "-325px";
		document.getElementById("signup-p6").style.right = "-325px";
		setTimeout(function(){
			document.getElementById("home").style.display = "none";
			document.getElementById("login").style.display = "none";
		},900);
		formContact = true;
		formHome = false;
		formLogin = false;
		resetMap();
	}
	else {
		formContact = false;
		closeFormContact();
	}
}

function closeFormContact() {
	document.getElementById("mapid").style.left = "0px";
	formContact = false;
	setTimeout(function(){
		document.getElementById("contact").style.display = "none";
	},900);
	resetMap();
}

// Formulaire de Login
function openFormLogin() {
	if (formLogin == false) {
		document.getElementById("login").style.display = "block";
		document.getElementById("login").style.right = "-1px";
		document.getElementById("mapid").style.right = "325px";
		document.getElementById("mapid").style.left = "0px";
		setTimeout(function(){
			document.getElementById("home").style.display = "none";
			document.getElementById("contact").style.display = "none";
		},900);
		formLogin = true;
		formHome = false;
		formContact = false;
		resetMap();
	}
	else {
		formLogin = false;
		closeFormLogin();
	}
}

function closeFormLogin() {
	document.getElementById("mapid").style.right = "0px";
	document.getElementById("signup-p1").style.right = "-325px";
	document.getElementById("signup-p2").style.right = "-325px";
	document.getElementById("signup-p3").style.right = "-325px";
	document.getElementById("signup-p4").style.right = "-325px";
	document.getElementById("signup-p5").style.right = "-325px";
	document.getElementById("signup-p6").style.right = "-325px";
	setTimeout(function(){
		document.getElementById("login").style.display = "none";
	},900);
	resetMap();
}

// Tramway
function openFormTramway() {
	if (formTramway == false) {
		formTramway = true;
		formBus = false;
		for (i = 1; i < 40; i++ ) {
			map.removeLayer(Bus[i]);
		}
		loadTram();
		loadArretRoseraie();
        loadArretArdenne() ;
		setInterval(function () {
			map.removeLayer(TramROS);
			map.removeLayer(TramARD);
			loadTram();
		}, 30000);
		resetMap();
	}
	else {
		formTramway = false;
		map.removeLayer(TramArret);
        map.removeLayer(TramArret2);
		map.removeLayer(TramROS);
		map.removeLayer(TramARD);
		resetMap();
	}
}
  
function closeFormTramway() {
	// Masquer le tram
	formTramway = false;
}

// Bus
function openFormBus() {
	if (formBus == false) {
		formBus = true;
		formTramway = false;
		map.removeLayer(TramArret);
        map.removeLayer(TramArret2);
		map.removeLayer(TramROS);
		map.removeLayer(TramARD);
		loadBus();
		setInterval(function () {
			for (i = 1; i < 40; i++ ) {
				map.removeLayer(Bus[i]);
			}

			loadBus();
		}, 30000);
		resetMap();
	}
	else {
		formBus = false;
		for (i = 1; i < 40; i++ ) {
			map.removeLayer(Bus[i]);
		}
		resetMap();
	}
}
  
function closeFormBus() {
	// Masquer le bus
	formBus = false;
}

// Formulaire d'enregistrement du nouvel utilisateur
function openFormSignUp() {
	document.getElementById("signup-p1").style.right = "-1px";
	document.getElementById("signup-p2").style.right = "-325px";
	resetMap();
}

function closeFormSignUp() {
	document.getElementById("signup-p1").style.right = "-325px";
	document.getElementById("signup-p2").style.right = "-325px";
	document.getElementById("signup-p3").style.right = "-325px";
	document.getElementById("signup-p4").style.right = "-325px";
	document.getElementById("signup-p5").style.right = "-325px";
	document.getElementById("signup-p6").style.right = "-325px";
	resetMap();
}