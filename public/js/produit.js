fetch("http://localhost:3000/api/furniture/:_id")

  /*
  
  .then(function(response){
      return response.json()
  })
  
  */

  .then(response => response.json())

  //.then(data => console.log(data))

  .then(function (productList) {
    console.log(productList)
    //code à faire ici
    //faire une boucle sur tous les produits
    //dans la boucle ajouter des éléments html avec les données dynamiques
    //innerHTML et les litéraux de gabarit (template literal)
    const furniture = [{
        _id: "Furniture1"
      }];
    let productSelection = document.querySelector("#productSelection");

    let url = 'file:///C:/Users/charl/Desktop/eLamp/Formation_Dev/Projet_5/orinoco/public/produit.html';
    let urlObj = new URL(url);
    let idFurniture = furniture[0]._id;
    urlObj.searchParams.append("id", idFurniture);
    productSelection.href = urlObj;

    for (const furniture of productList) {
        const number = furniture.price/100;
        let numberFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
        productSelection.innerHTML += `<div class="card mt-4">
        <img class="card-img-top img-fluid" src="${furniture.imageUrl}" alt="${furniture.name}">
        <div class="card-body">
          <h3 class="card-title">${furniture.name}</h3>
          <h4>${numberFormat}</h4>
          <p class="card-text">${furniture.description}</p>
        </div>
      </div>
      <!-- /.card -->

      <div class="card card-outline-secondary my-4">
        <div class="card-header">
          Personnalisation
        </div>
        <div class="card-body">
          <p>${furniture.varnish}</p>
          <hr>
          <a href="panier.html" class="btn btn-success">Ajouter au panier</a>
        </div>
      </div>
      <!-- /.card -->`
    }
}
)