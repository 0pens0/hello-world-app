// Display current timestamp
function updateTimestamp() {
    const now = new Date();
    const timestampEl = document.getElementById('timestamp');
    timestampEl.textContent = `Loaded at: ${now.toLocaleString()}`;
}

// Change greeting on button click
const greetings = [
    'Hello World!',
    'Bonjour le Monde!',
    'Hola Mundo!',
    '¡Hola Mundo!',
    'Ciao Mondo!',
    'Hallo Welt!',
    'こんにちは世界!',
    '你好世界!',
    'Привет мир!'
];

let currentIndex = 0;

document.getElementById('changeBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % greetings.length;
    const greetingEl = document.getElementById('greeting');
    greetingEl.style.opacity = '0';
    
    setTimeout(() => {
        greetingEl.textContent = greetings[currentIndex];
        greetingEl.style.opacity = '1';
    }, 150);
});

// Initialize
updateTimestamp();