const cartes = [
    { nom: "Le Mat", image: "mat.jpg", description: "Cette carte représente un nouveau départ, une aventure sans contrainte, la liberté d'explorer sans savoir où l'on va, mais avec enthousiasme.", descriptionReverse: "Reverse" },
    { nom: "Le Bateleur", image: "bateleur.jpg", description: "Un moment d'initiative, de création et d’opportunité où toutes les ressources sont à portée de main, et où l’on peut accomplir tout ce qu’on désire.", descriptionReverse: "Reverse" },
    { nom: "La Prêtresse", image: "pretresse.jpg", description: "Elle incarne la sagesse intérieure, la connaissance cachée et l’intuition profonde. Elle invite à écouter son instinct et à chercher les vérités au-delà des apparences.", descriptionReverse: "Reverse" },
    { nom: "L'Impératrice", image: "imperatrice.jpg", description: "La créativité et la fertilité sont à leur apogée. Elle symbolise la naissance de nouveaux projets, l’abondance et une énergie nourrissante et protectrice.", descriptionReverse: "Reverse" },
    { nom: "L'Empereur", image: "empereur.jpg", description: "Il représente la stabilité, la structure et l’autorité. C'est un guide fiable qui établit des fondations solides pour l'avenir et prend les décisions avec discernement.", descriptionReverse: "Reverse" },
    { nom: "Le Pape", image: "pape.jpg", description: "Cette carte évoque la guidance spirituelle, les valeurs morales, et la sagesse traditionnelle. Elle invite à chercher des réponses profondes auprès des autorités ou mentors.", descriptionReverse: "Reverse" },
    { nom: "L'Amoureux", image: "amoureux.jpg", description: "Un choix crucial, souvent lié à des décisions de cœur ou de vie, marquant une période où les relations sont fortes et l’harmonie possible si on suit son cœur.", descriptionReverse: "Reverse" },
    { nom: "Le Chariot", image: "chariot.jpg", description: "Cette carte symbolise le triomphe par la maîtrise de soi et la détermination. Elle annonce des victoires après une période de contrôle et de direction claire.", descriptionReverse: "Reverse" },
    { nom: "La Force", image: "force.jpg", description: "Elle représente la maîtrise intérieure, la patience et la capacité de surmonter les obstacles avec douceur et fermeté, en restant calme face aux difficultés.", descriptionReverse: "Reverse" },
    { nom: "L'Hermite", image: "hermite.jpg", description: "L'Hermite symbolise la recherche de la vérité à travers la réflexion solitaire. Elle indique un besoin de retrait temporaire pour trouver des réponses à l’intérieur de soi.", descriptionReverse: "Reverse" },
    { nom: "La Roue de Fortune", image: "fortune.jpg", description: "Le destin joue en votre faveur, des cycles favorables commencent à se manifester. Cette carte indique des opportunités favorables et un tournant positif dans la vie.", descriptionReverse: "Reverse" },
    { nom: "La Justice", image: "justice.jpg", description: "Elle parle d’équité, d’équilibre et de vérité. C’est une carte de jugement impartial où les conséquences sont justes et où les actions sont prises avec discernement.", descriptionReverse: "Reverse" },
    { nom: "Le Pendu", image: "pendu.jpg", description: "Cette carte représente un moment de suspension, où il est nécessaire de prendre du recul pour voir les choses sous un angle différent. Elle symbolise l’acceptation, la patience et la réflexion.", descriptionReverse: "Reverse" },
    { nom: "La Mort", image: "mort.jpg", description: "Bien qu’elle puisse sembler sombre, elle représente la fin nécessaire pour faire place à de nouveaux commencements. Elle marque une transformation profonde et bénéfique.", descriptionReverse: "Reverse" },
    { nom: "Tempérance", image: "temperance.jpg", description: "Une période d’équilibre et d’harmonie. Cette carte invite à modérer ses actions, à trouver le juste milieu et à vivre en paix avec soi-même et les autres.", descriptionReverse: "Reverse" },
    { nom: "Le Diable", image: "diable.jpg", description: "Cette carte représente les tentations et les pièges de l'ego, de la dépendance ou des attachements toxiques. Elle rappelle qu'il est temps de se libérer de ce qui nous entrave.", descriptionReverse: "Reverse" },
    { nom: "La Tour", image: "tour.jpg", description: "Bien qu'elle soit synonyme de destruction, elle annonce un changement radical mais nécessaire pour libérer de nouvelles opportunités. Elle symbolise l’éclatement des illusions.", descriptionReverse: "Reverse" },
    { nom: "L'Etoile", image: "etoile.jpg", description: "Une carte d’espoir, de guérison et d’inspiration. Elle symbolise la confiance en l’avenir et un retour à la paix intérieure, guidé par des aspirations profondes.", descriptionReverse: "Reverse" },
    { nom: "La Lune", image: "lune.jpg", description: "Elle évoque l’intuition, les rêves et les mystères. La Lune nous invite à explorer l'inconscient et à suivre notre intuition dans les moments d'incertitude.", descriptionReverse: "Reverse" },
    { nom: "Le Soleil", image: "soleil.jpg", description: "La réussite, la clarté et l’accomplissement. Le Soleil annonce des moments de bonheur pur, d'optimisme et d'énergie qui rayonnent dans tous les aspects de la vie.", descriptionReverse: "Reverse" },
    { nom: "Le Jugement", image: "jugement.jpg", description: "Cette carte marque un renouveau ou un réveil spirituel. Elle symbolise un appel au changement et à l’évolution, souvent accompagné de réconciliation ou de rédemption.", descriptionReverse: "Reverse" },
    { nom: "Le Monde", image: "monde.jpg", description: "La réalisation complète, l’accomplissement et la réussite. Le Monde symbolise la fin d’un cycle et la satisfaction d’avoir atteint un objectif important, apportant la paix et l’harmonie.", descriptionReverse: "Reverse" },
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
