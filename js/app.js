const app = document.getElementById('main-content');
const backBtn = document.getElementById('back-btn');
const soundToggle = document.getElementById('sound-toggle');
let isSoundOn = true;

// Router State
let currentState = {
    view: 'home', // home, list, detail
    categoryId: null,
    animalId: null
};

// Init
function init() {
    renderHome();

    backBtn.addEventListener('click', goBack);
    soundToggle.addEventListener('click', toggleSound);
}

// Navigation
function navigateTo(view, params = {}) {
    currentState = { view, ...params };

    // Show/Hide Back Button
    if (view === 'home') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    // Render View
    if (view === 'home') renderHome();
    else if (view === 'list') renderList(params.categoryId);
    else if (view === 'detail') renderDetail(params.animal);
}

function goBack() {
    if (currentState.view === 'detail') {
        navigateTo('list', { categoryId: currentState.categoryId });
    } else {
        navigateTo('home');
    }
}

// Renderers
function renderHome() {
    app.innerHTML = `
        <div class="grid">
            ${CATEGORIES.map(cat => `
                <div class="card" onclick="navigateTo('list', { categoryId: '${cat.id}' })" style="border-bottom: 5px solid ${cat.color}">
                    <span class="card-icon">${cat.icon}</span>
                    <div class="card-title">${cat.name}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderList(categoryId) {
    const category = CATEGORIES.find(c => c.id === categoryId);
    const animals = ANIMALS[categoryId];

    app.innerHTML = `
        <h2 style="text-align:center; margin-bottom:1rem; color: var(--primary)">${category.name}</h2>
        <div class="grid">
            ${animals.map(animal => `
                <div class="card" onclick='navigateTo("detail", { animal: ${JSON.stringify(animal)}, categoryId: "${categoryId}" })'>
                    <img src="${animal.img}" class="card-img" alt="${animal.name}" loading="lazy">
                    <div class="card-title">${animal.name}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderDetail(animal) {
    app.innerHTML = `
        <div class="detail-view">
            <img src="${animal.img}" class="detail-img" alt="${animal.name}">
            <div class="detail-title">${animal.name}</div>
            <button class="action-btn" onclick="speak('${animal.soundText}')">
                <span>🔊</span> Play Sound
            </button>
        </div>
    `;

    // Auto speak if sound is on
    if (isSoundOn) {
        setTimeout(() => speak(animal.name), 500);
    }
}

// Audio / TTS
function toggleSound() {
    isSoundOn = !isSoundOn;
    document.getElementById('sound-icon').textContent = isSoundOn ? '🔊' : '🔇';
}

function speak(text) {
    if (!window.speechSynthesis) return;

    // Cancel current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; // Slower for kids
    utterance.pitch = 1.2; // Higher pitch, friendlier
    utterance.volume = 1;

    // Try to find a good voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Google US English'));
    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);

    // Animate button or image while speaking could go here
}

// Start
init();
