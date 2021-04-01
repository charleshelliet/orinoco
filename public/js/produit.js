//récupération ID du produit via url et paramètres GET
let link = window.location.href;
let url = new URL(link);
let id = url.searchParams.get("id");

fetch("http://localhost:3000/api/furniture/" + id)
  .then((response) => response.json())

  .then((produit) => affichageDetails(produit))

  .catch(function (error) {
    console.log(error);
  });

function affichageDetails(productDetails) {
//affichage dynamique du détail du produit sélectionné selon l'id
  
  let productSelection = document.querySelector("#productSelection");

  //utilisation de innerHTML et les litéraux de gabarit (template literal)
  productSelection.innerHTML += `<div class="card mt-4">
    <img class="card-img-top img-fluid" src="${productDetails.imageUrl}" alt="${
    productDetails.name
  }">
    <div class="card-body">
      <h3 class="card-title">${productDetails.name}</h3>
      <h4>${currency(productDetails.price)}</h4>
      <p class="card-text">${productDetails.description}</p>
    </div>
  </div>
  <!-- /.card -->

  <div class="card card-outline-secondary my-4">
    <div class="card-header">
      Personnalisation
    </div>
    <div class="card-body">
      <select class="custom-select" id="varnishSelect">
        <option selected id="testVarnish">Choix du vernis</option>
      </select>
      <hr>
      <a href="panier.html" id="basketButton" class="btn btn-success">Ajouter au panier</a>
    </div>
  </div>

  <!-- /.card -->`;

  //boucle récupération des données du tableau de vernis

  let varnishSelect = document.querySelector("#varnishSelect");

  //affichage

  for (const [i, varnish] of productDetails.varnish.entries()) {
    varnishSelect.innerHTML += `<option value="${i}">${varnish}</option>`;
  }

  //événement onclick ajout au panier + enregistrement localStorage de l'id du produit

  basketButton.addEventListener("click", function (event) {
    //event.preventDefault();
    //choix vernis
    let varnish = document.querySelector("#varnishSelect");
    let valueVarnish = varnish.options[varnish.selectedIndex].text;
    //création objet
    let meubleVernis = new Object();
    meubleVernis.meuble = id;
    meubleVernis.varnish = valueVarnish;
    meubleVernis.quantity = 1;
    let price = 0;
    //vérifier si local storage vide ou non
    if (localStorage.getItem("addedProduct") === null) {
      //tableau vide
      console.log("rien dans le panier");
      //tableau regroupant les id
      let idArray = [];
      idArray.push(meubleVernis);
      localStorage.setItem("addedProduct", JSON.stringify(idArray));
      console.log("tableau créé :", localStorage.getItem("addedProduct"));
      //ajouter le prix
      price = productDetails.price;
      localStorage.setItem("price", JSON.stringify(price));
    } else {
      //vérifier si un produit parmi le tableau existe
      //tableau rempli
      console.log("panier bien rempli");
      //récupérer le tableau
      idArray = JSON.parse(localStorage.getItem("addedProduct"));
      //push produit dans le tableau
      idArray.push(meubleVernis);
      localStorage.setItem("addedProduct", JSON.stringify(idArray));
      //ajouter le prix
      price = JSON.parse(localStorage.getItem("price")) + productDetails.price;
      localStorage.setItem("price", JSON.stringify(price));
    }
  });
}
