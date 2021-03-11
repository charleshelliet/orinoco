//récupération objet contenu panier (id + vernis)
let basket = JSON.parse(localStorage.getItem("addedProduct"));

//boucle qui affiche les id de chaque produit
for (const product of basket) {
  fetch("http://localhost:3000/api/furniture/" + product.meuble)
    .then((response) => response.json())

    .then(function (productList) {

      let basket = localStorage.getItem("addedProduct");

      basket = document.querySelector("#basket");
      basket.innerHTML += `<tr>
   <th scope="row" class="border-0">
     <div class="p-2">
       <img src="${productList.imageUrl}" alt="${
        productList.name
      }" width="70" class="img-fluid rounded shadow-sm">
       <div class="ml-3 d-inline-block align-middle">
         <h5 class="mb-0"> <a href="produit.html?id=${
           productList._id
         }" class="text-dark d-inline-block align-middle">${
        productList.name
      }</a></h5><span class="text-muted font-weight-normal font-italic d-block">Vernis: ${
        product.varnish
      }</span>
       </div>
     </div>
   </th>
   <td class="border-0 align-middle"><strong>${currency(
     productList.price
   )}</strong></td>
   <td class="border-0 align-middle"><strong>${product.quantity}</strong></td>
   <td class="border-0 align-middle"><a role="button" onclick="remove()" href="panier.html" class="text-dark"><i class="fa fa-trash"></i></a></td>
 </tr>`;

    });
    
   
}

//récupérer prix panier
price = JSON.parse(localStorage.getItem("price"));
//sous-total
let sousTotal = document.querySelector("#sous-total");
sousTotal.innerHTML += `<strong>${currency(price)}</strong>`;
//frais de port
let shipping = price * 0.05;
let shippingValue = document.querySelector("#shipping");
shippingValue.innerHTML += `<strong>${currency(shipping)}</strong>`;
//TVA
let tva = price * 0.2;
let tvaValue = document.querySelector("#tva");
tvaValue.innerHTML += `<strong>${currency(tva)}</strong>`;
//Total
let total = price + shipping + tva;
let totalValue = document.querySelector("#total");
totalValue.innerHTML += `<p><strong>${currency(total)}</strong></p>`;
localStorage.setItem("total", total);

//sauvegarder des données du formulaire sur le service web
submit.addEventListener("click", function(event){

  console.log("le clic a fonctionné");
  //event.preventDefault()  
  //Nom + Prénom
  let inputFirstname = document.querySelector("#form11");
  let inputLastname = document.querySelector("#form12");
  localStorage.setItem("name", inputFirstname.value + inputLastname.value);
  let inputAdress = document.querySelector("#form14");
  let inputZip = document.querySelector("#form16");
  let inputCity = document.querySelector("#form17");
  localStorage.setItem(
    "adress",
    inputAdress.value + " " + inputZip.value + " " + inputCity.value
  );
  let inputEmail = document.querySelector("#form19");
  localStorage.setItem("email", inputEmail.value);
  let textInfo = document.querySelector("#form20");
  localStorage.setItem("info", textInfo.value);

 //créer un objet contact
 let contact = new Object();
  contact.firstName = inputFirstname.value;
  contact.lastName = inputLastname.value;
  contact.address = inputAdress.value;
  contact.city = inputCity.value;
  contact.email = inputEmail.value;
  console.log(contact); 

  //id
  let idArray = [];
  for (const product of basket){
    idArray.push(product.meuble);
  }
  console.log(idArray);

//body
let body = new Object();
body.contact = contact;
body.products = idArray;
console.log(body); 

fetch("http://localhost:3000/api/furniture/order", {
  method: "POST", 
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})

.then((response) => response.json())

.then((order) => {
  console.log(order); 
  orderId = order.orderId; 
  console.log(orderId)
  localStorage.setItem("orderId", orderId);
 })
});


//envoyer et valider les données auprès du backend

/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */
