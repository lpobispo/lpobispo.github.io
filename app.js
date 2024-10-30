
// JS code for the hamburger toggle menu effect
const ham_menu = document.querySelector('#mobile-menu')
const navbar_menu_links = document.querySelector('.navbar_menu')
const section_opacity = document.querySelector('section')

ham_menu.addEventListener('click', function() {
    ham_menu.classList.toggle('is-active');
    navbar_menu_links.classList.toggle('active');
    section_opacity.classList.toggle('is-active');
})



// JS code for typewriter effects
const words = ['an aspiring Software Developer', 'an aspiring Data Engineer', 'a Dad :)'];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Adjust typing speed (ms per character)
const delayBetweenWords = 1000; // Delay before switching words
const deletingSpeed = 100; // Speed when deleting characters

const span = document.getElementById('typewriter-text');

function typeWriterEffect() {
    if (charIndex < words[wordIndex].length) {
        span.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterEffect, typingSpeed);
    } else {
        setTimeout(deleteWord, delayBetweenWords);
    }
}

function deleteWord() {
    if (charIndex > 0) {
        span.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteWord, deletingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
        setTimeout(typeWriterEffect, typingSpeed);
    }
}

// Start the typing effect
typeWriterEffect();

