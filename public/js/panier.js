//récupération objet contenu panier (id + vernis)
let basket = JSON.parse(localStorage.getItem("addedProduct"));
console.log(basket);


async function displayProduct() {
  //initialisation prix panier
  var prix = 0;
  //boucle qui affiche les id de chaque produit
  for (const product of basket) {
    console.log(product);
    fetch("http://localhost:3000/api/furniture/" + product.meuble)
      .then((response) => response.json())

      .then(function (productList) {
        console.log(productList);

        let basket = localStorage.getItem("addedProduct");

        let oneMore = document.querySelector("#basket");
        oneMore.innerHTML += `<tr>
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
   <td class="border-0 align-middle"><a href="" class="text-dark"><i class="fa fa-trash"></i></a></td>
 </tr>`;

        //calcul du prix du panier
        prix = prix + parseInt(productList.price);
        console.log(prix);
        sessionStorage.setItem("priceUpdated", prix);
      });
  }
  console.log(prix);
  return prix;
}
async function basketPrice() {
  //sous total
  prix = await displayProduct();
  console.log(prix);
  let sousTotal = document.querySelector("#sous-total");
  sousTotal.innerHTML += `<strong>${currency(prix)}</strong>`;

  //frais de port
  let shipping = prix * 0.05;
  console.log(shipping);
  let shippingValue = document.querySelector("#shipping");
  shippingValue.innerHTML += `<strong>${currency(shipping)}</strong>`;

  //TVA
  let tva = prix * 0.2;
  console.log(tva);
  let tvaValue = document.querySelector("#tva");
  tvaValue.innerHTML += `<strong>${currency(tva)}</strong>`;

  //Total
  let total = prix + shipping + tva;
  console.log(total);
  let totalValue = document.querySelector("#total");
  totalValue.innerHTML += `<p><strong>${currency(total)}</strong></p>`;
}

basketPrice();
