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
        "Non 404 ?",
        "Retour ?",
    ],
};

setTimeout(function () {
    var errorQuotes = strings.en;
    let idx = Math.floor(Math.random() * (errorQuotes.length - 1));
    let selectedString = errorQuotes[idx];

    document.getElementById("error").innerHTML = selectedString;
}, 5);
