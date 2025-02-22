const cartes = [
    { nom: "Le Mat", image: "mat.jpg", description: "Le commencement, l’aventure...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Bateleur", image: "bateleur.jpg", description: "Nouvelles opportunités, initiative...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Prêtresse", image: "pretresse.jpg", description: "Sagesse, secret, connaissance...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "L'Impératrice", image: "imperatrice.jpg", description: "Créativité, intuition...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "L'Empereur", image: "empereur.jpg", description: "Stabilité, autorité...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Pape", image: "pape.jpg", description: "Conseil, tradition, spiritualité...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "L'Amoureux", image: "amoureux.jpg", description: "Choix, relation, émotions...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Chariot", image: "chariot.jpg", description: "Succès, contrôle, mouvement...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Force", image: "force.jpg", description: "Courage, maîtrise de soi, énergie...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "L'Hermite", image: "hermite.jpg", description: "Réflexion, solitude, sagesse...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Roue de Fortune", image: "fortune.jpg", description: "Changement, destinée, opportunité...", descriptionReverse: "Reverse"},
    { nom: "La Justice", image: "justice.jpg", description: "Vérité, équilibre, karma...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Pendu", image: "pendu.jpg", description: "Pause, sacrifice, changement de perspective...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Mort", image: "mort.jpg", description: "Transformation, fin, renouveau...", descriptionReverse: "Reverse", texte: "..." },,
    { nom: "Tempérance", image: "temperance.jpg", description: "Equilibre, patience, harmonie...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Diable", image: "diable.jpg", description: "Désirs, attachements, illusions...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Tour", image: "tour.jpg", description: "Rupture, révélation, libération...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "L'Etoile", image: "etoile.jpg", description: "Espoir, inspiration, bien-être...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "La Lune", image: "lune.jpg", description: "Intuition, illusions, mystères...", descriptionReverse: "Reverse", texte: "..." },,
    { nom: "Le Soleil", image: "soleil.jpg", description: "Joie, succès, épanouissement...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Jugement", image: "jugement.jpg", description: "Révélation, renaissance, décision...", descriptionReverse: "Reverse", texte: "..." },
    { nom: "Le Monde", image: "monde.jpg", description: "Accomplissement, succès, plénitude...", descriptionReverse: "Reverse", texte: "..." },
];

let isOn = false;

function tirerCartes() {
    isOn = !isOn;
    const carte = document.querySelector('.carte');
    const carteVerso = document.querySelector('.carte-verso img');

    const indexAleatoire = Math.floor(Math.random() * cartes.length);
    
    // Est-ce que la carte est inversée ?
    const reverseOrNotValue = Math.random() * 2;
    let reverseCard = false;
    if (reverseOrNotValue >= 1)
    {
        reverseCard = true;
    }
    if (isOn)
    {
        carteVerso.src = `images/${cartes[indexAleatoire].image}`;
        carte.classList.toggle('tournee');
        textCarte.classList.toggle('transition');
        if (reverseCard)
        {
            textCarte.innerHTML = cartes[indexAleatoire].descriptionReverse;
            carteVerso.classList.remove('reverse');
            carteVerso.classList.toggle('reverse');
        }
        else
        {
            textCarte.innerHTML = cartes[indexAleatoire].description;
            carteVerso.classList.remove('reverse');
        }
    }
    else
    {
        textCarte.innerHTML = "Tirez une carte pour voir sa signification...";
        carte.classList.remove('tournee');
        textCarte.classList.remove('transition');
    }
    // Ajoute la classe pour faire tourner la carte
}

// 🔄 Ajout du swipe (glissement) pour tirer les cartes
let startX = 0;

const carteHTML = document.querySelector('.carte');
const textCarte = document.querySelector('#texte-carte');

carteHTML.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carteHTML.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 20) { // Si le swipe est assez long
        tirerCartes();
    }
}); 
