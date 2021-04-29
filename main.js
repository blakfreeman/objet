// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()


var moi = {
    name: 'Pemba',
    prenom:"Anthony" ,
    age:"32"
}

console.log(moi.age);
// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

var junior = {
    name: 'Junior',
    prenom:"Santos" ,
    age:"27"
}

var kevin = {
    
}
// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez


kevin.name = moi.name;
kevin.age = junior.age;
kevin.taille = '1m70'
console.log(kevin.name +" " +kevin.age +" " + kevin.taille);
