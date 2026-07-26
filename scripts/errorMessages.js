const strings = {
    en: [
        "Alt + F4?",
        "Clear cache?",
        "End of the road?",
        "Escape the void?",
        "Forget that?",
        "Go back?",
        "Quit?",
        "Return?",
        "Reload?",
        "Resync?",
        "Move to a safe point?",
        "No 404?",
        "Out of bounds?",
        "Stop this?",
        "Turn back?",
        "Where to now?",
    ],
    fr: [
        "Alt + F4 ?",
        "La fin du route ?",
        "La fin ?",
        "Quitter ?",
        "Retour ?",
        "Non 404 ?",
    ],
};

var currentLang = "en";

function errQuoteGen(lang) {
    let errorQuotes = strings[lang || "en"];
    const idx = Math.floor(Math.random() * (errorQuotes.length - 1));
    const selectedString = errorQuotes[idx];

    document.getElementById("error").innerHTML = selectedString;
}

setTimeout(function () {
    errQuoteGen(currentLang);
}, 4);

document.getElementById("lang-en").addEventListener("click", function(){
    currentLang = "en"; 
    errQuoteGen(currentLang);
});

  document.getElementById("lang-fr").addEventListener("click", function(){
    currentLang = "fr"; 
    errQuoteGen(currentLang);
  });