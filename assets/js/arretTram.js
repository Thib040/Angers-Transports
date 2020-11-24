let iconstationRos = L.icon({
	iconUrl: 'images/station.png',
	iconSize: [20, 20]
});

let iconstationArd = L.icon({
	iconUrl: 'images/station2.png',
	iconSize: [20, 20]
});


let TramArret = L.layerGroup([]);

function loadArretRoseraie() {
	TramArret.addTo(map);
	const xmlhr = new XMLHttpRequest();
	xmlhr.open("GET","https://data.angers.fr/api/records/1.0/search/?dataset=bus-tram-topologie-dessertes&q=&rows=25&facet=codeparcours&facet=mnemoligne&facet=nomligne&facet=dest&facet=mnemoarret&facet=nomarret&facet=numarret&refine.mnemoligne=A&refine.codeparcours=ARD+Voie+1+-%3E+ARO+Voie+1&exclude.nomarret=RELEVE+CTT+voie+1", true);
	xmlhr.onreadystatechange = function () {
		if (xmlhr.readyState == 4) {
			if (xmlhr.status == 200) {
				try {
					let responseText = xmlhr.responseText;
					var tramJSON = JSON.parse(responseText);
					for(var i=0; i<tramJSON.records.length; i++){
						id = tramJSON.records[i].fields.nomarret;
						arretMapRos[id] = tramJSON.records[i];
					}
					TramArret.clearLayers();
					for (let id in arretMapRos) {
						// Récupération de la feature
						const record = arretMapRos[id];
						// Ajout du marqueur avec la popup
						let latitude = record.fields.coordonnees[0];
						let longitude = record.fields.coordonnees[1];
						let nomarret = record.fields.nomarret;
						let mnemoligne = record.fields.mnemoligne;
						arretTramRos = L.marker([latitude, longitude], { icon: iconstationRos }).bindPopup("<p><b>Arret : " + nomarret+ "</b></br></br><div>Ligne : " + mnemoligne + "</div><div>Destination : Angers Roseraie</div></p>").addTo(TramArret);
					}
					} 
					catch (e) {
						alert('Error chargement des données');
						console.log(e);
					}
			} 
			else {
					alert('Error chargement des données');
					console.log(xmlhr.statusText);
			}
		}
	}
	xmlhr.send();
}


let TramArret2 = L.layerGroup([]);

function loadArretArdenne() {
	TramArret2.addTo(map);
	const xmlhr = new XMLHttpRequest();
	xmlhr.open("GET","https://data.angers.fr/api/records/1.0/search/?dataset=bus-tram-topologie-dessertes&q=&rows=25&facet=codeparcours&facet=mnemoligne&facet=nomligne&facet=dest&facet=mnemoarret&facet=nomarret&facet=numarret&refine.mnemoligne=A&refine.codeparcours=ARO+Voie+2++-%3E++ARD+Voie+2&exclude.nomarret=RELEVE+CTT+Voie+2", true);
	xmlhr.onreadystatechange = function () {
		if (xmlhr.readyState == 4) {
			if (xmlhr.status == 200) {
				try {
					let responseText = xmlhr.responseText;
					var tramJSON = JSON.parse(responseText);
					for(var i=0; i<tramJSON.records.length; i++){
						id = tramJSON.records[i].fields.nomarret;
						arretMapArd[id] = tramJSON.records[i];
					}
					TramArret2.clearLayers();
					for (let id in arretMapArd) {
						// Récupération de la feature
						const record = arretMapArd[id];
						// Ajout du marqueur avec la popup
						let latitude = record.fields.coordonnees[0];
						let longitude = record.fields.coordonnees[1];
						let nomarret = record.fields.nomarret;
						let mnemoligne = record.fields.mnemoligne;
						arretTramArd = L.marker([latitude, longitude], { icon: iconstationArd }).bindPopup("<p><b>Arret : " + nomarret+ "</b></br></br><div>Ligne : " + mnemoligne + "</div><div>Destination : Avrillé Ardenne</div></p>").addTo(TramArret2);
					}
					} 
					catch (e) {
						alert('Error chargement des données');
						console.log(e);
					}
			} 
			else {
					alert('Error chargement des données');
					console.log(xmlhr.statusText);
			}
		}
	}
	xmlhr.send();
}