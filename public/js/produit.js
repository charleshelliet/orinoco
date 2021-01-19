//récupération ID du produit via url et paramètres GET
let link = window.location.href;
let url = new URL(link);
let id = url.searchParams.get("id");
console.log(id);

fetch("http://localhost:3000/api/furniture/" + id)
  /*
  
  .then(function(response){
      return response.json()
  })
  
  */

  .then((response) => response.json())

  //.then(data => console.log(data))

  .then(function (productDetails) {
    console.log(productDetails);

    //affichage dynamique du détail du produit sélectionné selon l'id
    //utilisation de innerHTML et les litéraux de gabarit (template literal)

    let productSelection = document.querySelector("#productSelection");


    productSelection.innerHTML += `<div class="card mt-4">
    <img class="card-img-top img-fluid" src="${productDetails.imageUrl}" alt="${productDetails.name}">
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
      <select class="custom-select" id="varnishButton">
        <option selected id="testVarnish">Choix du vernis</option>
      </select>
      <hr>
      <a href="panier.html" id="basketButton" class="btn btn-success">Ajouter au panier</a>
    </div>
  </div>

  <!-- /.card -->`;

    //boucle récupération des données du tableau de vernis

    let varnishButton = document.querySelector("#varnishButton");

    console.log(productDetails.varnish);

    for (const varnish of productDetails.varnish) {

      varnishButton.innerHTML += 
      `<option value="1">${varnish}</option>`
    }

    //événement onclick ajout au panier + enregistrement localStorage de l'id du produit

    basketButton.addEventListener("click", function(event){
      //event.preventDefault()
      console.log("YOUPI mon click fonctionne");
      //vérifier si local storage vide ou non
      if (localStorage.getItem('addedProduct') === null) {
        //tableau vide
        console.log("rien dans le panier")
        //tableau regroupant les id
        let idArray = []
        idArray.push(id);
        localStorage.setItem('addedProduct', JSON.stringify(idArray));
        console.log("tableau créé :", localStorage.getItem('addedProduct'))
      }
      else {
        //tableau rempli
        console.log("panier bien rempli")
        //récupérer le tableau
        idArray = JSON.parse(localStorage.getItem('addedProduct'));
        console.log(idArray);
        //ajout nouvel item
        idArray.push(id);
        console.log(idArray);
        localStorage.setItem('addedProduct', JSON.stringify(idArray));
        console.log(idArray);
      }
    
    });  

  });

 