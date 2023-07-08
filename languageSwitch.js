// Get the necessary elements
const pageTitle = document.getElementById('pageTitle');
const navTitle = document.getElementById('navTitle');
const navMenu = document.querySelector('.navmenu');
const disclaimer = document.querySelector('.disclaimer');
const frButton = document.getElementById('frButton');
const enButton = document.getElementById('enButton');

// Set initial language
let currentLanguage = 'en';

// Function to switch language to French
function switchToFrench() {
  if (currentLanguage === 'fr') return; // Already in French

  // Update text content
  pageTitle.textContent = 'Compil Emeutes';
  navTitle.textContent = 'Compil Vidéos Twitter des Émeutes';
  navMenu.textContent = 'Recherche Twitter';
  disclaimer.textContent = 'Les dernières dingueries du jour dans notre douce France...';

  // Update current language
  currentLanguage = 'fr';
}

// Function to switch language to English
function switchToEnglish() {
  if (currentLanguage === 'en') return; // Already in English

  // Update text content
  pageTitle.textContent = 'Compil FrenchRiots';
  navTitle.textContent = 'Twitter Video Compilation of Riots';
  navMenu.textContent = 'Twitter Search';
  disclaimer.textContent = 'the Latest Urban Riots in France';

  // Update current language
  currentLanguage = 'en';
}

// Event listeners for language buttons
frButton.addEventListener('click', switchToFrench);
enButton.addEventListener('click', switchToEnglish);

// Set initial language
switchToFrench(); // Set the initial language to French