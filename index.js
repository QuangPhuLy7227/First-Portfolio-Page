const myName = document.getElementById('my-name');
const nameList = ['Q', 'u', 'a', 'n', 'g', ' ', 'P', 'h', 'u', ' ', 'L','y'];
let index = 0;

function startAnimation() {
    let timeId = setInterval(frame, 200);
    let timeId2 = setInterval(typingEff, 200);

    function frame() {
        if (index < nameList.length) {
            myName.textContent += nameList[index];
            index++;
        }

        if (index === nameList.length) {
            clearInterval(timeId);
            clearInterval(timeId2);
            myName.style.borderRight = '';
            setTimeout(() => {
                // Restart the animation after 5 seconds
                index = 0;
                myName.textContent = '';
                startAnimation();
            }, 5000);
        }
    }

    function typingEff() {
        let borderVal = myName.style.borderRight;
        if (borderVal === '3px solid springgreen') {
            myName.style.borderRight = '';
        } else {
            myName.style.borderRight = '3px solid springgreen';
        }
    }
}

// Start the animation initially
startAnimation();


/* Responsive behaviour */

// JS and Figma skill icons swap

const jsToFigma = document.getElementsByClassName('skills-card-icon-container js')[0];
const figmaToJs = document.getElementsByClassName('skills-card-icon-container js-m')[0];

if (window.innerWidth <= 768) {
    jsToFigma.classList.remove('js');
    jsToFigma.classList.add('figma');
    figmaToJs.classList.remove('js-m');
    figmaToJs.classList.add('js');
} else {
    console.log('window.innerWidth is above 768px')
}

// 5. Skills cards hover animation

const skillCards = document.getElementsByClassName('skills-card');
const skillIcons = document.getElementsByClassName('skills-card-icon-container');
const skillLevels = document.getElementsByClassName('level-fraction');

//Mouse over methods
skillCards[0].onmouseover = () => {
    // skillIcons[0].style.background = 'url("images\html-logo.png") center/100% no-repeat';
    for (let i = 0; i < 7; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[1].onmouseover = () => {
    // skillIcons[1].style.background = 'url("images\css3-logo.png") center/100% no-repeat';
    for (let i = 7; i < 14; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[2].onmouseover = () => {
    // skillIcons[2].style.background = 'url("images\js-colour.svg") center/100% no-repeat';

    for (let i = 14; i < 21; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[3].onmouseover = () => {
    // skillIcons[3].style.background = 'url("images\figma-colour.svg") center/100% no-repeat';
    for (let i = 21; i < 27; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[4].onmouseover = () => {
    // skillIcons[4].style.background = 'url("images\java-4-logo.svg") center/100% no-repeat';
    for (let i = 27; i < 34; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[5].onmouseover = () => {
    for (let i = 34; i < 40; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[6].onmouseover = () => {
    for (let i = 40; i < 47; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[7].onmouseover = () => {
    for (let i = 47; i < 54; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[8].onmouseover = () => {
    for (let i = 54; i < 61; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[9].onmouseover = () => {
    for (let i = 61; i < 67; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[10].onmouseover = () => {
    for (let i = 67; i < 73; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[11].onmouseover = () => {
    for (let i = 73; i < 79; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}
skillCards[12].onmouseover = () => {
    for (let i = 79; i < 86; i++) {
        skillLevels[i].style.background = '#C79F4E00';
    }
}

//Mouse out methods
skillCards[0].onmouseout = () => {
    // skillIcons[0].style.background = '';
    for (let i = 0; i < 7; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[1].onmouseout = () => {
    // skillIcons[1].style.background = '';
    for (let i = 7; i < 14; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[2].onmouseout = () => {
    // skillIcons[2].style.background = '';
    for (let i = 14; i < 21; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[3].onmouseout = () => {
    // skillIcons[3].style.background = '';
    for (let i = 21; i < 27; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[4].onmouseout = () => {
    // skillIcons[4].style.background = '';
    for (let i = 27; i < 34; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[5].onmouseout = () => {
    for (let i = 34; i < 40; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[6].onmouseout = () => {
    for (let i = 40; i < 47; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[7].onmouseout = () => {
    for (let i = 47; i < 54; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[8].onmouseout = () => {
    for (let i = 54; i < 61; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[9].onmouseout = () => {
    for (let i = 61; i < 67; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[10].onmouseout = () => {
    for (let i = 67; i < 73; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[11].onmouseout = () => {
    for (let i = 73; i < 79; i++) {
        skillLevels[i].style.background = '';
    }
}
skillCards[12].onmouseout = () => {
    for (let i = 79; i < 86; i++) {
        skillLevels[i].style.background = '';
    }
}

// 6. Contacts hover animation

const contacts = document.getElementsByClassName('contact');
const contactIcons = document.getElementsByClassName('contact-icon-container');

contacts[0].onmouseover = () => contactIcons[0].style.backgroundImage = 'url("images/linkedin-logo.png")';
contacts[1].onmouseover = () => contactIcons[1].style.backgroundImage = 'url("images\gmail-colour.svg")';

contacts[0].onmouseout = () => contactIcons[0].style.backgroundImage = '';
contacts[1].onmouseout = () => contactIcons[1].style.backgroundImage = '';