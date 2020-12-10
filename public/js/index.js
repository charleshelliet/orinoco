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
      const number = furniture.price/100;
      let numberFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
      containerProducts.innerHTML += 
      `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${furniture.imageUrl}" alt="${furniture.name}"></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="produit.html?${furniture._id}" class="btn btn-primary stretched-link">${furniture.name}</a>
          </h4>
          <h5>${numberFormat}</h5>
          <p class="card-text">${furniture.description}</p>
        </div>
      </div>
    </div>`
    }

    let carouselIndicators = document.querySelector(".carousel-indicators");

    for (const furniture of productList) {
      carouselIndicators.innerHTML +=
      `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
    }

    let carouselInner = document.querySelector(".carousel-inner");

    for (const furniture of productList) {
      carouselInner.innerHTML +=
      `<div class="carousel-item">
      <a href="produit.html?${furniture._id}">
        <img class="d-block img-fluid" src="${furniture.imageUrl}" alt="${furniture.name}">
      </a> 
    </div>`
    }

    let carouselItem = document.querySelectorAll(".carousel-item");

    let carouselFirst = carouselItem[0];

    carouselFirst.classList.add("active");

    console.log(carouselItem);

  }
  )


  .catch(function (error) {
    console.log(error)
  }
  )
