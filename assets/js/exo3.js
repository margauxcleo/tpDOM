// function getFormvalue() {
//     var firstName = document.getElementById("fname").value;
//     console.log(firstName);
//     var lastName = document.getElementById("lname").value;
//     console.log(lastName);
// }

// ou en faisant une boucle qui vérifie si le formulaire est renseigné (mieux)

function getFormvalue() {
    var x = document.getElementById("form1");
    // on crée une boucle qui va permettre d'aller chercher toutes les elements du form et leurs valeurs
    for (var i = 0; i < x.length; i++) {
        // si l'élément présent dans form a une valeur, alors c'est ok, sinon on a le msg d'erreur suivant au submit
        if (x.elements[i].value != 'Submit') {
            alert(x.elements[i].value);
        }
    }
}

// ou autre correction 
// function getFormvalue(){​​
//     var nom = document.getElementById("form1").elements[0].value;
//     var prenom = document.getElementById("form1").elements[1].value;
//     document.getElementById("result").innerHTML = nom + " " + prenom;
// }​​