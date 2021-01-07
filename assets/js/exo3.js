// function getFormvalue() {
//     var firstName = document.getElementById("fname").value;
//     console.log(firstName);
//     var lastName = document.getElementById("lname").value;
//     console.log(lastName);
// }

// ou en faisant une boucle qui vérifie si le formulaire est renseigné (mieux)

function getFormvalue() {
    var x = document.getElementById("form1");
    for (var i = 0; i < x.length; i++) {
        if (x.elements[i].value != 'Submit') {
            alert(x.elements[i].value);
        }
    }
}