document.getElementById("languageSelect").addEventListener("change", function() {
    const language = this.value;
    let message = "";

    switch(language) {
        case "en":
            message = "You selected English!";
            break;
        case "es":
            message = "¡Has seleccionado Español!";
            break;
        case "fr":
            message = "Vous avez sélectionné Français!";
            break;
        case "de":
            message = "Sie haben Deutsch ausgewählt!";
            break;
        default:
            message = "Please select a language!";
    }

    document.getElementById("output").innerText = message;
});
