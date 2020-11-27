fetch("http://localhost:3000/api/furniture")

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
    let containerProducts = document.querySelector("#containerProducts");

    for (const furniture of productList) {
      containerProducts.innerHTML +=
        `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${furniture.imageUrl}" alt="meuble 1"></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="produit.html" class="btn btn-primary stretched-link">${furniture.name}</a>
          </h4>
          <h5>€${furniture.price/100}</h5>
          <p class="card-text">${furniture.description}</p>
        </div>
      </div>
    </div>`
    }
  }
  )

  /*
  */

  .catch(function (error) {
    console.log(error)
  }
  )