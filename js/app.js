let currentIndex = 0
const totalCards = 9;

function previousCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}


function updateCarousel() {
    const slider = document.querySelector('.cards-section');
    const cardWidth = document.querySelector('.animatronic-card').offsetWidth;
    const newPosition = -currentIndex * (cardWidth + 10);
    slider.style.transform = `translateX(${newPosition}px)`;
    changeAnimatronic(currentIndex);
}

function changeAnimatronic(index) {
    currentIndex = index

    const fullbody = [
        './assets/images/circus-baby-fullbody.png',
        './assets/images/funt-foxy-fullbody.png',
        './assets/images/ballora-fullbody.png',
        './assets/images/funt-freddy-fullbody.png',
        './assets/images/bonbon-fullbody.png',
        './assets/images/bonnet-fullbody.png',
        './assets/images/bidybabs-fullbody.png',
        './assets/images/minireenas-fullbody.png',
        './assets/images/helpy-fullbody.png'
    ];
    const names = [
        'Circus Baby',
        'Funtime Foxy',
        'Ballora',
        'Funtime Freddy',
        'Bonbon',
        'Bonnet',
        'Bidybabs',
        'Minireenas',
        'Helpy'
    ];
    const resumes = [
        'Circus Baby is a featured animatronic known for its multisensory entertainment capabilities. With a unique blend of enchanting music, immersive lighting, and surprising interactions, Circus Baby offers a captivating and memorable experience for audiences.',
        'Funtime Foxy stands out with its advanced social interaction skills. From engaging conversations to interactive games, Funtime Foxy enhances buyer appeal by providing a friendly and personalized experience, making it a sought-after animatronic.',
        'Ballora is recognized for her elegant and captivating dance skills. With graceful performances, Ballora appeals to audiences seeking sophisticated and visually stunning entertainment, making her an ideal choice for events and venues that prioritize elegance.',
        "Funtime Freddy and his puppet Bon-Bon form a modular entertainment ensemble. Funtime Freddy's performances are enriched by the collaborative efforts of his little bunny, offering a seamless blend of synchronized movements and interactive engagements for diverse entertainment settings.",
        "Autonomous hand puppet with AI capabilities, enhancing Funtime Freddy's performances through synchronized movements and interactive engagements with the audience.",
        "Miniaturized animatronic accessory designed for surprise interactions and audience engagement during Funtime Freddy's performances, featuring enhanced agility and stealth capabilities.",
        "Modular animatronic units known for their crowd management and audience interaction capabilities. They are equipped with advanced sensors and responsive programming, contributing to their effectiveness in various entertainment settings.",
        "Compact animatronic units designed for entertainment during Ballora's performances. Their enhanced agility and stability capabilities make them well-suited for adding a dynamic element to the entertainment experience.",
        "Helpful and compact animatronic designed for assisting in various tasks within the Fazbear's franchise. With its responsive programming and user-friendly design, Helpy ensures efficient crowd management and audience interaction during events."
    ];
    const skills1 = [
        'Internal ice cream dispenser',
        'Light activation sensor',
        'Audio activation sensor',
        'Parental tracking',
        'Real-time interactive responses and assistance',
        'Compact micro-entertainment module',
        'Swarm coordination algorithm',
        'Compact designs',
        'User assistance'
    ];
    const skills2 = [
        'Song databank',
        'Parental voice sync & replay',
        'Balance/stability',
        'Proximity Sensor',
        'Dynamic companion subroutine',
        'Designed for surprise interactions',
        "Enhace Circus Baby's performances",
        'Impressive group performances',
        'Provide helpful guidance'
    ];
    const skills3 = [
        'Emergency stop',
        'Variable scent release',
        'Collision sensor',
        'Storage tank',
        "Enhance Funtime Freddy's performances",
        'Audience engagement',
        'Crowd management',
        "Enhace Ballora's performances",
        'Interactive support'
    ]

    const animatronicFullbody = document.getElementById('animatronic-fullbody');
    const animatronicName = document.getElementById('animatronic-name');
    const animatronicResume = document.getElementById('animatronic-resume');
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');

    const backgroundFade = document.getElementById('background-fade');
    const backgroundFadeRight = document.getElementById('background-fade-right');

    const cardsSection = document.querySelector('.cards-section');
    const selectedCard = cardsSection.children[index];

    selectedCard.style.order = '0';

    animatronicFullbody.src = fullbody[index];
    animatronicName.innerText = names[index];
    animatronicResume.innerText = resumes[index];
    skill1.innerText = skills1[index];
    skill2.innerText = skills2[index];
    skill3.innerText = skills3[index];

    // You can customize the gradient colors based on your preference.
    const gradientColors = [
        'var(--circus-baby-color)',
        'var(--funtime-foxy-color)',
        'var(--ballora-color)',
        'var(--funtime-freddy-color)',
        'var(--bonbon-color)',
        'var(--bonnet-color)',
        'var(--bidybabs-color)',
        'var(--minireenas-color)',
        'var(--helpy-color)'
    ];

    
    // Remova a classe 'selected' de todos os cards
    const cards = document.querySelectorAll('.animatronic-card');
    cards.forEach(card => card.classList.remove('selected'));

    // Adicione a classe 'selected' ao card clicado
    cards[index].classList.add('selected');

    backgroundFade.style.background = `linear-gradient(rgba(255, 255, 255, 0.00) 50%, ${gradientColors[index]} 100%)`;
    backgroundFadeRight.style.background = `linear-gradient(90deg, rgba(255, 255, 255, 0.00) 50%, ${gradientColors[index]} 100%)`
}

document.addEventListener('DOMContentLoaded', updateCarousel);

