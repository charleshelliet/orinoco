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
    //code à faire ici
    //faire une boucle sur tous les produits
    //dans la boucle ajouter des éléments html avec les données dynamiques
    //innerHTML et les litéraux de gabarit (template literal)

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
          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choix du vernis
          </button>
          <div class="dropdown-menu" id="varnishButton" aria-labelledby="dropdownMenuButton">
          </div>
        </div>
      <hr>
      <a href="panier.html" class="btn btn-success">Ajouter au panier</a>
    </div>
  </div>

  <!-- /.card -->`;

    /* -- boucle ci-dessous pour récupérer les données du tableau de vernis */

    let varnishButton = document.querySelector("#varnishButton");
    
    for (const varnish of productDetails.varnish) {

      varnishButton.innerHTML += 
      `<a class="dropdown-item" href="#">${varnish}</a>`
    }

  });

