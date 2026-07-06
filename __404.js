// Generate some messsages.
function ofFour() {
    const strings = [
        "Escape the void?",
        "Forget that?",
            "Go back?",
            "Quit?",
            "Return?",
            "Reload?",
            "No 404?"
        ];

        document.getElementById("error").innerHTML = strings[Math.floor(Math.random() * strings.length)];
    }   