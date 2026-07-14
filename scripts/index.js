/*

Created by Langston Gavin Miller

*/

(function(){
  /* ============ TRANSLATIONS ============ */
  const translations = {
    en: {
      "__title": "Langston Gavin Miller - Computer Science Student",
      "nav.work":"Work", "nav.about":"About", "nav.experience":"Experience", "nav.contact":"Contact", "nav.dark":"Dark", "nav.light":"Light",
      "hero.eyebrow":"Virginia State University · Computer Science",
      "hero.title":'Computer science student, <em>showing up for his community.</em>',
      "hero.lede":"I&#x2019;m based in Manassas, Virginia, studying computer science while staying active in volunteer and leadership work. This page is where my projects will live as I build them.",
      "hero.cta1":"See my work", "hero.cta2":"Get in touch",
      "works.heading":"Projects", "works.tag":"Works: 10 slot(s)",
      "works.note":"Each space above is reserved for a project. Check back soon, as I continue my courses and personal achievements.", 
      "works.placeholder":"Untitled", "works.reserved":"Coming soon",
      "about.heading":"About",
      "about.p1":"I&#x2019;m a computer science student at Virginia State University, originally from Manassas, Virginia. Alongside coursework, I&#x2019;ve spent years volunteering with my local church and taking part in leadership programs that put real-world skills into practice.",
      "about.p2":"I&#x2019;m just getting started on the technical side — this site will grow as I take on more projects, internships, and coursework I&#x2019;m proud to share.",
      "about.fact1k":"Based in", "about.fact1v":"Manassas, Virginia",
      "about.fact2k":"Studying", "about.fact2v":"Computer Science, Virginia State University",
      "about.fact3k":"Previously", "about.fact3v":"Osbourn Park High School",
      "about.fact4k":"Skills", "about.fact4v":"Creativity, Leadership, Organization, Teamwork",
      "experience.heading":"Experience &amp; education", "experience.tag":"2020 — Now",
      "experience.colExperience":"Experience", "experience.colEducation":"Education",
      "experience.current":"Now",
      "experience.role1Title":"Volunteer, Grace Loves",
      "experience.role1Org":"Grace Covenant Church",
      "experience.role1Desc":"Serve meals for low-income families, organize school-supply drives, and help set up community events.",
      "experience.role2Title":"Member",
      "experience.role2Org":"Jack and Jill Corp.",
      "experience.role2Desc":"Took part in workshops simulating real-world scenarios, building life and leadership skills.",
      "experience.edu1Title":"Computer Science", "experience.edu1Org":"Virginia State University",
      "experience.edu2Title":"Advanced Studies", "experience.edu2Org":"Osbourn Park High School",
      "experience.skillsLabel":"Skills",
      "skills.list":"Creativity,Leadership,Organization,Problem solving,Teamwork,Communication",
      "contact.heading":"Open to internships and project opportunities.",
      "contact.cta":"langgavmiller@hotmail.com →",
      "contact.tele":"(703)851-1886",
      "footer.rights":"© {date.fullYear} Langston Gavin Miller.",
      "footer.built":"Powered by HTML and Javascript",
      "works.1": "Slopway Trains",
      "works.1.desc": "A train avoidance game",
    },
    fr: {
      "__title": "Langston Gavin Miller - Étudiant d'informatique",
      "nav.work":"Travaux", "nav.about":"À propos", "nav.experience":"Expérience", "nav.contact":"Contact", "nav.dark":"Sombre", "nav.light":"Clair",
      "hero.eyebrow":"Virginia State University · Informatique",
      "hero.title":'Étudiant en informatique, <em>engagé pour sa communauté.</em>',
      "hero.lede":"Je vis à Manassas, en Virginie, où j&#x2019;étudie l&#x2019;informatique tout en restant actif dans le bénévolat et le leadership. Cette page accueillera mes projets au fur et à mesure que je les réalise.",
      "hero.cta1":"Voir mes travaux", "hero.cta2":"Me contacter",
      "works.heading":"Projets", "works.tag":"En cours : 10 emplacement(s)",
      "works.note": "Chaque espace ci-dessus est réservé à un projet. Revenez bientôt pour suivre l'évolution de mes cours et de mes réalisations personnelles.",
      "works.placeholder":"Sans titre", "works.reserved":"Bientôt",
      "about.heading":"À propos",
      "about.p1":"Je suis étudiant en informatique à Virginia State University, originaire de Manassas, en Virginie. En parallèle de mes études, je suis bénévole depuis plusieurs années dans mon église et je participe à des programmes de leadership qui mettent en pratique des compétences concrètes.",
      "about.p2":"Je débute tout juste du côté technique — ce site évoluera au fil de mes projets, de mes stages et des travaux dont je suis fier.",
      "about.fact1k":"Basé à", "about.fact1v":"Manassas, Virginie",
      "about.fact2k":"Études", "about.fact2v":"Informatique, Virginia State University", // PLACEHOLDER
      "about.fact3k":"Précédemment", "about.fact3v":"Osbourn Park High School",
      "about.fact4k":"Compétences", "about.fact4v":"Créativité, leadership, organisation, travail d'équipe",
      "experience.heading":"Expérience et formation", "experience.tag":"2020 — Actuel",
      "experience.colExperience":"Expérience", "experience.colEducation":"Formation",
      "experience.current":"Actuel",
      "experience.role1Title":"Bénévole, Grace Loves",
      "experience.role1Org":"Grace Covenant Church",
      "experience.role1Desc":"Sers des repas aux familles à faible revenu, organise des collectes de fournitures scolaires et aide à l&#x2019;installation d&#x2019;événements communautaires.",
      "experience.role2Title":"Membre",
      "experience.role2Org":"Jack and Jill Corp.",
      "experience.role2Desc":"A participé à des ateliers simulant des situations réelles, développant des compétences de vie et de leadership.",
      "experience.edu1Title":"Informatique", "experience.edu1Org":"Virginia State University",
      "experience.edu2Title":"Études Avancées", "experience.edu2Org":"Osbourn Park High School",
      "experience.skillsLabel":"Compétences",
      "skills.list":"Créativité, Leadership, Organisation, Résolution de problèmes, Travail d'équipe, Communication",
      "contact.heading":"Ouvert aux stages et aux opportunités de projets.",
      "contact.cta":"langgavmiller@hotmail.com →",
      "contact.tele":"+17038511886",
      "footer.rights":"© {date.fullYear} Langston Gavin Miller.",
      "footer.built":"Composé en HTML et Javascript",
      "works.1": "Trains de Slopway",
      "works.1.desc": "Un jeu d'esquive de trains",
    }
  };

  let currentLang = "en";

  function applyTranslations(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      // Fetch the localization string from the table.
      const key = el.getAttribute("data-i18n");
      var value = translations[lang][key];
      if (!value) {
        value = "MISSINGLOCSTR." + key
      }
      
      // Let's import the date so I don't have to make an update called: "Update Copyright Year" every year.
      var _DT = new Date();
      value = value.replaceAll("{date.fullYear}", _DT.getFullYear());

      // Then, let's set the final value of the string.
      el.innerHTML = value;
    });
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en");
    document.getElementById("lang-fr").setAttribute("aria-pressed", lang === "fr");
    document.getElementById("theme-label").textContent = isDark
      ? translations[lang]["nav.light"] : translations[lang]["nav.dark"];
    buildWorks(lang);
    buildSkills(lang);
  }

  // Load in translations, but delay it to prevent an error.
  setTimeout(function() {
    applyTranslations(currentLang);
  }, 3);

  document.getElementById("lang-en").addEventListener("click", function(){
    currentLang = "en"; 
    applyTranslations("en");
  });
  document.getElementById("lang-fr").addEventListener("click", function(){
    currentLang = "fr"; 
    applyTranslations("fr");
  });

  /* ============ THEME ============ */
  let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const sunPath = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>';
  const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';

  function applyTheme(){
    document.documentElement.classList.toggle("dark", isDark);
    document.getElementById("theme-icon").innerHTML = isDark ? sunPath : moonPath;
    document.getElementById("theme-label").textContent = isDark
      ? translations[currentLang]["nav.light"] : translations[currentLang]["nav.dark"];
  }

  document.getElementById("theme-toggle").addEventListener("click", function(){
    isDark = !isDark;
    applyTheme();
  });

  /* ============ WORKS PLACEHOLDERS ============ */
  const plateIcon = '<svg class="plate-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="1"></rect><path d="M3 15l5-5 4 4 5-6 4 5"></path></svg>';

  function buildWorks(lang){
    const grid = document.getElementById("works-grid");

    if (!!grid) {
      grid.innerHTML = "";
      for (let i = 1; i <= 10; i++){
        const num = String(i).padStart(3, "0");
        const plate = document.createElement("div");

        const titleText = translations[lang]["works." + i] || translations[lang]["works.placeholder"];
        const statusText = translations[lang]["works." + i + ".desc"]|| translations[lang]["works.reserved"];

        plate.className = "plate";
        plate.innerHTML =
          '<span class="plate-num mono">' + num + '</span>' +
          '<div class="plate-body">' + plateIcon +
            '<span class="plate-title">' + titleText + '</span>' +
            '<span class="plate-status">' + statusText+ '</span>' +
          '</div>';
        grid.appendChild(plate);
      }
    }
  }

  /* ============ SKILLS CHIPS ============ */
  function buildSkills(lang){
    const wrap = document.getElementById("skills-chips");

    if (!!wrap) {
      wrap.innerHTML = "";
      translations[lang]["skills.list"].split(",").forEach(function(skill){
        const chip = document.createElement("span");
        chip.className = "skill-chip";
        chip.textContent = skill;
        wrap.appendChild(chip);
      });
    }
  }

  applyTheme();
  applyTranslations(currentLang);

})();

/// This is the end of this file! You are awesome! ///