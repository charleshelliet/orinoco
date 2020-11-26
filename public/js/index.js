fetch("http://localhost:3000/api/furniture")

/*

.then(function(response){
    return response.json()
})

*/

.then(response => response.json())

//.then(data => console.log(data))

.then(function(data){
    console.log(data)
    //code à faire ici
    //faire une boucle sur tous les produits
    //dans la boucle ajouter des éléments html avec les données dynamiques
    //innerHTML et les litéraux de gabarit (template literal)
    let containerProducts = document.querySelector("#containerProducts");
    let productList = ['Maradona', 'Platini', 'Baggio', 'Moller', 'Vieri', 'Drogba', 'Best','Cantona','Pirlo'];
    

    for (let i = 0; i < productList.length; i++) {
        // code
        containerProducts.innerHTML +=  `<div class="col-lg-4 col-md-6 mb-4">
                  <div class="card h-100">
                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Item ${productList[i]}</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                  </div>
                </div>`;
      }

    /*
    for(const furniture of productList){
        containerProducts.innerHTML += 
        `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="/images/oak_1.jpg" alt="meuble 1"></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="produit.html" class="btn btn-primary stretched-link">${furniture}</a>
            </h4>
            <h5>$24.99</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
        </div>
      </div>`
    }
})
*/

.catch(error => alert("Erreur : " + error));

