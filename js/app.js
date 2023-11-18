let currentIndex = 0

function previousCard() {
    currentIndex = (currentIndex - 1 + 5) % 5;
    changeAnimatronic(currentIndex);
}

function nextCard() {
    currentIndex = (currentIndex + 1) % 5;
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
    ];
    const names = [
        'Circus Baby',
        'Funtime Foxy',
        'Ballora',
        'Funtime Freddy',
        'Bonbon'
    ];
    const resumes = [
        'This is the first card.',
        'This is the second card.',
        'This is the third card.',
        'This is the fourth card',
        'This is the fifth card'
    ];
    const skills1 = [
        'Circus Baby skill1',
        'Funt-foxy skill1',
        'Ballora skill1',
        'Funt-freddy skill1',
        'Bonbon skill1'
    ];
    const skills2 = [
        'Circus Baby skill2',
        'Funt-foxy skill2',
        'Ballora skill2',
        'Funt-freddy skill2',
        'Bonbon skill2'
    ];
    const skills3 = [
        'Circus Baby skill3',
        'Funt-foxy skill3',
        'Ballora skill3',
        'Funt-freddy skill3',
        'Bonbon skill3'
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
        'var(--bonbon-color)'
    ];

    backgroundFade.style.background = `linear-gradient(rgba(255, 255, 255, 0.00) 50%, ${gradientColors[index]} 100%)`;
    backgroundFadeRight.style.background = `linear-gradient(90deg, rgba(255, 255, 255, 0.00) 50%, ${gradientColors[index]} 100%)`
}


