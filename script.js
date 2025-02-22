// script.js

// Tableau contenant les images des cartes disponibles
const cartes = [
    'mat.jpg',
    'bateleur.jpg',
    'pretresse.jpg',
    'imperatrice.jpg',
    'empereur.jpg',
    'pape.jpg',
    'amoureux.jpg',
    'chariot.jpg',
    'justice.jpg',
    'hermite.jpg',
    'fortune.jpg',
    'force.jpg',
    'pendu.jpg',
    'mort.jpg',
    'temperance.jpg',
    'diable.jpg',
    'tour.jpg',
    'etoile.jpg',
    'lune.jpg',
    'soleil.jpg',
    'jugement.jpg',
    'monde.jpg'
];

// Fonction pour tirer une carte aléatoire
function tirerCarte() {
    const carte = document.querySelector('.carte');
    const carteVerso = document.querySelector('.carte-verso img');
    
    // Choisir un index aléatoire du tableau "cartes"
    const indexAleatoire = Math.floor(Math.random() * cartes.length);
    
    // Mettre à jour l'image du verso avec la carte tirée
    carteVerso.src = `images/${cartes[indexAleatoire]}`;

    // Ajoute la classe pour faire tourner la carte
    carte.classList.toggle('tournee');
}
