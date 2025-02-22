const cartes = [
    { nom: "Le Mat", image: "mat.jpg", description: "Le commencement, l’aventure..." },
    { nom: "Le Bateleur", image: "bateleur.jpg", description: "Nouvelles opportunités, initiative..." },
    { nom: "La Papesse", image: "papesse.jpg", description: "Sagesse, secret, connaissance..." },
    { nom: "L'Impératrice", image: "imperatrice.jpg", description: "Créativité, intuition..." },
    { nom: "L'Empereur", image: "empereur.jpg", description: "Stabilité, autorité..." },
    { nom: "Le Pape", image: "pape.jpg", description: "Conseil, spiritualité..." }
];

function tirerCartes() {
    let tirage = cartes.sort(() => Math.random() - 0.5).slice(0, 3);
    
    tirage.forEach((carte, index) => {
        let divCarte = document.getElementById(carte${index + 1});
        divCarte.innerHTML = <img src="${carte.image}" alt="${carte.nom}" width="100"><p>${carte.nom}</p>;
    });
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
