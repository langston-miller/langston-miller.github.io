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
    document.getElementById("error").innerHTML = strings[Math.floor(Math.random() * (strings.en.length - 1))];
}, 3);
