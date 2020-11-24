var iconBus = L.icon({
	iconUrl: 'images/bus.png',
	iconSize: [20, 20]
});


let Bus = [0];
for (i = 1; i < 40; i++ ) {
	Bus[i] = L.layerGroup([]);
}

function loadBus() {
	if (formBus == true) {

		for (i = 1; i < 40; i++ ) {
			Bus[i].addTo(map);
		}

		const xmlhr = new XMLHttpRequest();
		xmlhr.open("GET", "https://data.angers.fr/api/records/1.0/search/?dataset=bus-tram-position-tr&q=&facet=novh&facet=mnemoligne&facet=nomligne&facet=dest", true);
		xmlhr.onreadystatechange = function () {
			if (xmlhr.readyState == 4) {
				if (xmlhr.status == 200) {
					try {
						let responseText = xmlhr.responseText;
						busJSON = JSON.parse(responseText);
						for(var i=0; i<busJSON.records.length; i++){
							id = busJSON.records[i].fields.sv;
							busMap[id] = busJSON.records[i];
						}
						
						for (i = 1; i < 40; i++ ) {
							Bus[i].clearLayers();
						}
						
						for (let id in busMap) {
						// Récupération de la feature
							const record = busMap[id];
						// Ajout du marqueur avec la popup
							let latitude = record.fields.coordonnees[0];
							let longitude = record.fields.coordonnees[1];
							let ligne = record.fields.mnemoligne;
							let arret = record.fields.nomarret;
							let dest = record.fields.dest;
							let harret = record.fields.harret;
							let retard = Math.trunc(record.fields.ecart/60);
							let etoile = "<br><div class='stars'><form action=''><input class='star star-5' id='star-5' type='radio' value='5' name='star'/><label class='star star-5' for='star-5'></label><input class='star star-4' id='star-4' type='radio' value='4' name='star'/><label class='star star-4' for='star-4'></label><input class='star star-3' id='star-3' type='radio' value='3' name='star'/><label class='star star-3' for='star-3'></label><input class='star star-2' id='star-2' type='radio' value='2' name='star'/><label class='star star-2' for='star-2'></label><input class='star star-1' id='star-1' type='radio' value='1' name='star'/><label class='star star-1' for='star-1'></label></form></div>";

							switch(dest){
								case "MONPLAISIR":
									markerBus1a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[1]);
									break;
								case "BELLE BEILLE":
									markerBus1b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[2]);
									break;
								case "TRELAZE QUANTINIERE":
									markerBus2a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[3]);
									break;
								case "ST SYLVAIN GAUGUIN":
									markerBus2b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[4]);
									break;
								case "BANCHAIS":
									markerBus2c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[5]);
									break;
								case "AVRILLE ADEZIERE":
									markerBus3a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[6]);
									break;
								case "MURS ERIGNE":
									markerBus3b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[7]);
									break;
								case "SAINT BARTHELEMY":
									markerBus4a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[8]);
									break;
								case "BEAUCOUZE L'ATOLL":
									markerBus4b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[9]);
									break;
								case "BEAUCOUZE HAUTE ROCHE":
									markerBus4c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[10]);
									break;
								case "CIRCULAIRE SENS A":
									markerBus5a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[11]);
									break;
								case "CIRCULAIRE SENS B":
									markerBus5b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[12]);
									break;
								case "BOUCHEMAINE CENTRE":
									markerBus6a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[13]);
									break;
								case "BOUCHEMAINE CHANTOURTEAU":
									markerBus6b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[14]);
									break;
								case "ZI EST":
									markerBus6c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[15]);
									break;
								case "BOUCHEMAINE HARENCHERES":
									markerBus6d = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[16]);
									break;
								case "MONTREUIL par SALETTE":
									markerBus7a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[17]);
									break;
								case "LORRAINE":
									markerBus7b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[18]);
									break;
								case "AQUAVITA VERNEAU":
									markerBus8a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[19]);
									break;
								case "CHU HOPITAL":
									markerBus8b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[20]);
									break;
								case "GEORGE SAND par LA CHESNA":
									markerBus8c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[21]);
									break;
								case "MAIRIE DES PONTS DE CE":
									markerBus8d = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[22]);
									break;
								case "EVENTARD par MONPLAISIR":
									markerBus9a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[23]);
									break;
								case "ESPACE ANJOU":
									markerBus9b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[24]);
									break;
								case "SCHWEITZER":
									markerBus10a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[25]);
									break;
								case "SORGES":
									markerBus10b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[26]);
									break;
								case "TRELAZE SAINT LEZIN":
									markerBus10c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[27]);
									break;
								case "L'HOIRIE LAC DE MAINE":
									markerBus11a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[28]);
									break;
								case "CLINIQUE DE L'ANJOU":
									markerBus11b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[29]);
									break;
								case "SAINTE GEMMES":
									markerBus11c = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[30]);
									break;
								case "MOUL MARCILLE par TRELAZE":
									markerBus12a = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[31]);
									break;
								case "SAINT AUBUN LA SALLE":
									markerBus12b = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[32]);
									break;
								case "CHANTOURTEAU":
									markerBus15 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[33]);
									break;
								case "BAUNE":
									markerBus30 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[34]);
									break;
								case "BRIOLLAY":
									markerBus31 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[35]);
									break;
								case "SAINT LEGER LA COUDRE":
									markerBus35 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[36]);
									break;
								case "LA MEMBROLLE":
									markerBus39 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[37]);
									break;
								case "ECOUFLANT":
									markerBus42 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[38]);
									break;
								case "FENEU":
									markerBus33 = L.marker([latitude, longitude], { icon: iconBus }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(Bus[39]);
									break;
								default:
									break;
							}
						}
						
					} catch (e) {
						alert('Error chargement des données');
						console.log(e);
					}
				} else {
					alert('Error chargement des données');
					console.log(xmlhr.statusText);
				}
			}
		}  
		xmlhr.send();
	}
	else {
		for (i = 1; i < 40; i++ ) {
			map.removeLayer(Bus[i]);
		}

	}
}