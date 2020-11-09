'use strict';

$(document).ready(function() {
    // Action qui est exécutée quand le formulaire est envoyé ( #connexion est l'ID du formulaire)
        $('#contact').on('submit', function(e) {
            e.preventDefault(); // On empêche de soumettre le formulaire
            var $this = $(this);
            // Envoi de la requête HTTP en mode asynchrone
            sendFormValid(); // Ajax ne marche pas en local
            $.ajax({
                url: $this.attr('action'), // On récupère l'action (ici action.php)
                type: $this.attr('method'), // On récupère la méthode (post)
                data: $this.serialize(), // On sérialise les données = Envoi des valeurs du formulaire
                dataType: 'json', // JSON
                success: function(json) { // Si ça c'est passé avec succès
                    // Notifications
                    if (data.result) {
                        document.getElementById("btnSend").innerHTML = "&#10004";
                        setTimeout(function(){
                            setTimeout(function(){
                                document.getElementById("btnSend").innerHTML = "Send";
                            },900);
                            closeFormContact();
                        },2000);
                    } else {
                        document.getElementById("btnSend").innerHTML = "&#10006";
                        setTimeout(function(){
                            setTimeout(function(){
                                document.getElementById("btnSend").innerHTML = "Send";
                            },900);
                            closeFormContact(); 
                        },2000);
                     }
                }
            });
        });
    });

// Reponse attendue 
function sendFormValid() {
    document.getElementById("btnSend").innerHTML = "&#10004";
    setTimeout(function(){
        setTimeout(function(){
            document.getElementById("btnSend").innerHTML = "Send";
        },900);
        closeFormContact();
	},2000);
}