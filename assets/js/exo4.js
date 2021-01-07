// générer une alerte au chargement de la page 
window.onload = function(){ 
    alert("Bienvenue !");
}

// générer une alerte quand on passe sur une image
function alertOnImg() {
    alert("Vous êtes sur l'image 1");
}

// générer une alerte quand on clique sur un bouton
function buttonAlert() {
    alert("Vous avez cliqué sur le bouton !")
}

//changer la couleur de fond 
function changeBackgroundColor() {
    document.querySelector("body")
    .classList.add("blue-background");
}

// changer l'apparence du bouton 
function changeButtonLook() {
    document.getElementById("button_background").classList.add("dark-button");
}

//reset tous les paramètres changés
function resetAllChanges() {
    document.querySelector("body")
    .classList.remove("blue-background");
    document.getElementById("button_background").classList.remove("dark-button");
}

// changer une image par une autre quand la souris passe dessus
function changeImg() {
    document.getElementById("img2").classList.add('hidden');
    document.getElementById("img3").classList.remove('hidden');
    document.getElementById("img3").classList.add('active');
}

//rétablir l'ancienne img
function resetImg() {
    document.getElementById("img3").classList.remove('active');
    document.getElementById("img3").classList.add('hidden');
    document.getElementById("img2").classList.remove('hidden');
    document.getElementById("img2").classList.add('active');  
}
