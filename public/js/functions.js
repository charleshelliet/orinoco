/* Fonction devise 

Déclaration :
Une fonction qui permet de convertir un nombre en devise selon le pays.
Elle prend en paramètre le nombre que l'on veut convertir.
Une fois convertie on veut retourner le nombre converti.
Appel de la fonction.

*/

function currency (price){
    const number = price/100;
    let numberFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
    return numberFormat;
}
    
