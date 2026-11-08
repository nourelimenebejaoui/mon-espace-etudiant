const bouton = document.getElementById("monBouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function() {

    if (message.textContent === "") {
        message.textContent = "bon courage pour vos etudes";
        bouton.textContent = "Cacher le message";
    } else {
        message.textContent = "";
        bouton.textContent = "Afficher un message";
    }

});