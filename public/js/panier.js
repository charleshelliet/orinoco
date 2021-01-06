let basket = localStorage.getItem('addedProduct');
console.log(basket)

//récupération des données de l'API via fetch

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
    
    let basket = localStorage.getItem('addedProduct');
    console.log(basket)

    let oneMore = document.querySelector("#basket");
    oneMore.innerHTML += `<tr>
    <th scope="row" class="border-0">
      <div class="p-2">
        <img src="${productList.imageUrl}" alt="${productList.name}" width="70" class="img-fluid rounded shadow-sm">
        <div class="ml-3 d-inline-block align-middle">
          <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${productList.name}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Vernis:${productList.varnish}</span>
        </div>
      </div>
    </th>
    <td class="border-0 align-middle"><strong>${productList.price}</strong></td>
    <td class="border-0 align-middle"><strong>3</strong></td>
    <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
  </tr>`
  });
