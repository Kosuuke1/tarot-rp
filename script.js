const cartes = [
    { nom: "Le Mat", image: "mat.jpg", description: "Le commencement, l’aventure..." },
    { nom: "Le Bateleur", image: "bateleur.jpg", description: "Nouvelles opportunités, initiative..." },
    { nom: "La Papesse", image: "pretresse.jpg", description: "Sagesse, secret, connaissance..." },
    { nom: "L'Impératrice", image: "imperatrice.jpg", description: "Créativité, intuition..." },
    { nom: "L'Empereur", image: "empereur.jpg", description: "Stabilité, autorité..." },
    { nom: "Le Pape", image: "pape.jpg", description: "Conseil, spiritualité..." }
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
    }
    // Ajoute la classe pour faire tourner la carte
    carte.classList.toggle('tournee');
}

// 🔄 Ajout du swipe (glissement) pour tirer les cartes
let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 50) { // Si le swipe est assez long
        tirerCartes();
    }
}); 
document.addEventListener("click", function() {
    tirerCartes();
});
