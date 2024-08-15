const heroTitle = document.querySelector(".hero-title-span");
const titleChars = heroTitle.textContent.split('');
const cvBtn = document.querySelector("#show-cv");
const cvModal = document.querySelector("#cvModal");
const closeBtn = document.querySelector(".close");


// Initialize all functionalities
function initialize() {
    displayName();
    setupCVDisplay();
    setupCVClose();
}

// Function to display my name char by char
function displayName() {
    heroTitle.innerHTML = ''; 
    typeChar();
}

// function to write the name
function typeChar() {
    let counter = 0;
    let interval = setInterval(() => {
        heroTitle.innerHTML += titleChars[counter];
        counter++
        if (counter > titleChars.length) {
            clearInterval(interval);
            counter = 0;
            heroTitle.innerHTML = '';
            typeChar();
        }
    }, 300);
}

// Function to setup the CV display button
function setupCVDisplay() {
    cvBtn.addEventListener("click", () => showModal(cvModal));
}

// Function to setup the CV close button
function setupCVClose() {
    closeBtn.addEventListener("click", () => closeModal(cvModal));
}

// Function to show the modal
function showModal(modal) {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modal) {
    modal.style.display = "none";
}

initialize();
