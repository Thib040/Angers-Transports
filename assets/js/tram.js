var iconTramROS = L.icon({
	iconUrl: 'images/tramROS.png',
	iconSize: [20, 20]
});

var iconTramARD = L.icon({
	iconUrl: "images/tramARD.png",
	iconSize: [20, 20]
});

let TramROS = L.layerGroup([]);
let TramARD = L.layerGroup([]);

function loadTram() {
	if (formTramway == true) {
		TramROS.addTo(map);
		TramARD.addTo(map);
		const xmlhr = new XMLHttpRequest();
		xmlhr.open("GET", "https://data.angers.fr/api/records/1.0/search/?dataset=bus-tram-position-tr&q=&rows=99&facet=novh&facet=mnemoligne&facet=nomligne&facet=dest&refine.mnemoligne=A", true);
		xmlhr.onreadystatechange = function () {
			if (xmlhr.readyState == 4) {
				if (xmlhr.status == 200) {
					try {
						let responseText = xmlhr.responseText;
						tramJSON = JSON.parse(responseText);
						for(var i=0; i<tramJSON.records.length; i++){
							id = tramJSON.records[i].fields.sv;
							tramMap[id] = tramJSON.records[i];
						}
						
						TramARD.clearLayers();
						TramROS.clearLayers();
						
						for (let id in tramMap) {
							// Récupération de la feature
								const record = tramMap[id];
							// Ajout du marqueur avec la popup
								let latitude = record.fields.coordonnees[0];
								let longitude = record.fields.coordonnees[1];
								let ligne = record.fields.mnemoligne;
								let arret = record.fields.nomarret;
								let dest = record.fields.dest;
								let harret = record.fields.harret;
								let retard = Math.trunc(record.fields.ecart/60);
								let etoile = "<br><div class='stars'><form action=''><input class='star star-5' id='star-5' type='radio' value='5' name='star'/><label class='star star-5' for='star-5'></label><input class='star star-4' id='star-4' type='radio' value='4' name='star'/><label class='star star-4' for='star-4'></label><input class='star star-3' id='star-3' type='radio' value='3' name='star'/><label class='star star-3' for='star-3'></label><input class='star star-2' id='star-2' type='radio' value='2' name='star'/><label class='star star-2' for='star-2'></label><input class='star star-1' id='star-1' type='radio' value='1' name='star'/><label class='star star-1' for='star-1'></label></form></div>";
								
								if (dest == "ANGERS ROSERAIE"){
									markerTramROS = L.marker([latitude, longitude], { icon: iconTramROS }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(TramROS);
								} else if (dest == "AVRILLE ARDENNE") {
									markerTramARD = L.marker([latitude, longitude], { icon: iconTramARD }).bindPopup("<p><b>Ligne : " + ligne + "</b></br><div>Destination : " + dest + "</div><div>Prochain arret :" + arret + "</div><div>Arrivée prochain arret :" + harret + "</div><div>Retard : " + retard + " minutes" + etoile).addTo(TramARD);
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
		map.removeLayer(TramROS);
		map.removeLayer(TramARD);
	}
}