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
        
})

.catch(error => alert("Erreur : " + error));

