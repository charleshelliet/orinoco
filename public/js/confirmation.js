//Récupérer numéro de commande
let orderId = localStorage.getItem("orderId");

//Afficher résumé de commande
let adress = localStorage.getItem("adress");
let price = localStorage.getItem("total");
let email = localStorage.getItem("email");
let info = localStorage.getItem("info");
order = document.querySelector("#order");
order.innerHTML += `<p class="lead">Vous recevrez prochainement sur <strong>${email}</strong> le suivi de livraison de votre <strong>commande n° ${orderId} </p></strong>
<p>Adresse de livraison : <strong>${adress}</strong> </p>
<p>Prix total : <strong>${currency(price)}</strong> </p>
<p>Information complémentaire : <strong>${info}</strong></p>`;

//vider la panier une fois la commande passée
localStorage.clear();