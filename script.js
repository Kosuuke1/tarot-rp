const cartes = [
    { nom: "Le Mat", image: "mat.jpg", description: "Le commencement, l’aventure...", texte: "..." },
    { nom: "Le Bateleur", image: "bateleur.jpg", description: "Nouvelles opportunités, initiative...", texte: "..." },
    { nom: "La Prêtresse", image: "pretresse.jpg", description: "Sagesse, secret, connaissance...", texte: "..." },
    { nom: "L'Impératrice", image: "imperatrice.jpg", description: "Créativité, intuition...", texte: "..." },
    { nom: "L'Empereur", image: "empereur.jpg", description: "Stabilité, autorité...", texte: "..." },
    { nom: "Le Pape", image: "pape.jpg", description: "Conseil, tradition, spiritualité...", texte: "..." },
    { nom: "L'Amoureux", image: "amoureux.jpg", description: "Choix, relation, émotions...", texte: "..." },
    { nom: "Le Chariot", image: "chariot.jpg", description: "Succès, contrôle, mouvement...", texte: "..." },
    { nom: "La Force", image: "force.jpg", description: "Courage, maîtrise de soi, énergie...", texte: "..." },
    { nom: "L'Hermite", image: "hermite.jpg", description: "Réflexion, solitude, sagesse...", texte: "..." },
    { nom: "La Roue de Fortune", image: "fortune.jpg", description: "Changement, destinée, opportunité..." },
    { nom: "La Justice", image: "justice.jpg", description: "Vérité, équilibre, karma...", texte: "..." },
    { nom: "Le Pendu", image: "pendu.jpg", description: "Pause, sacrifice, changement de perspective...", texte: "..." },
    { nom: "La Mort", image: "mort.jpg", description: "Transformation, fin, renouveau...", texte: "..." },,
    { nom: "Tempérance", image: "temperance.jpg", description: "Equilibre, patience, harmonie...", texte: "..." },
    { nom: "Le Diable", image: "diable.jpg", description: "Désirs, attachements, illusions...", texte: "..." },
    { nom: "La Tour", image: "tour.jpg", description: "Rupture, révélation, libération...", texte: "..." },
    { nom: "L'Etoile", image: "etoile.jpg", description: "Espoir, inspiration, bien-être...", texte: "..." },
    { nom: "La Lune", image: "lune.jpg", description: "Intuition, illusions, mystères...", texte: "..." },,
    { nom: "Le Soleil", image: "soleil.jpg", description: "Joie, succès, épanouissement...", texte: "..." },
    { nom: "Le Jugement", image: "jugement.jpg", description: "Révélation, renaissance, décision...", texte: "..." },
    { nom: "Le Monde", image: "monde.jpg", description: "Accomplissement, succès, plénitude...", texte: "..." },
];

let isOn = false;

function tirerCartes() {
    isOn = !isOn;
    const carte = document.querySelector('.carte');
    const carteVerso = document.querySelector('.carte-verso img');

    const indexAleatoire = Math.floor(Math.random() * cartes.length);
    
    if (isOn)
    {
        carteVerso.src = `images/${cartes[indexAleatoire].image}`;
        carte.classList.toggle('tournee');
    }
    else
    {
        carte.classList.remove('tournee');
    }
    // Ajoute la classe pour faire tourner la carte
}

// 🔄 Ajout du swipe (glissement) pour tirer les cartes
let startX = 0;

const carteHTML = document.querySelector('.carte');

carteHTML.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carteHTML.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 20) { // Si le swipe est assez long
        tirerCartes();
    }
}); 
