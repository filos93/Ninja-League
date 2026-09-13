/* =====================================
   NINJA LEAGUE

   1. Configuration
      - ranks
      - themes
      - rank messages
      - rank order

   2. Application State
      - state
      - previous rank

   3. DOM References
      - app root

   4. DOM Creation
      - card
      - title
      - subtitle
      - ninja image
      - level
      - rank
      - message
      - progress bar
      - buttons
      - theme selector

   5. UI Functions
      - updateUI()
      - updateTheme()
      - updateCardTheme()
      - updateProgressBar()
      - updateProgressColor()
      - animateLevel()

   6. Game Logic
      - getCurrentRank()
      - increaseLevel()
      - decreaseLevel()
      - resetLevel()

   7. Storage
      - saveState()

   8. Event Listeners
      - buttons
      - theme selector

   9. DOM Mounting
      - append elements

   10. Application Init
       - updateUI()

================================

/* =========================
   CONFIGURATION
========================= */

const ranks = [
    {
        minLevel: 0,
        title: "Student",
        image: "student.png"
    },
    {
        minLevel: 20,
        title: "Genin",
        image: "genin.png"
    },
    {
        minLevel: 40,
        title: "Chunin",
        image: "chunin.png"
    },
    {
        minLevel: 60,
        title: "Jonin",
        image: "jonin.png"
    },

    {
        minLevel: 80,
        title: "Kage",
        image: "kage.png"
    }
];

const themes = [
    {
        value: "roma",
        label: "🟡🔴 ROMA"
    },
    {
        value: "napoli",
        label: "🔵 NAPOLI"
    },
    {
        value: "juventus",
        label: "⚪⚫ JUVENTUS"
    }
];

let previousRank = "";

const rankOrder = {
    student: 0,
    genin: 1,
    chunin: 2,
    jonin: 3,
    kage: 4
};

const rankMessages = {

    roma: {
        genin: "🟡🔴 Hai conquistato il grado Genin della Roma!",
        chunin: "🐺 Chunin della Roma! La tua crescita continua.",
        jonin: "⚔️ Jonin della Roma! Sei tra i ninja più forti.",
        kage: "🏆 Kage della Roma! La leggenda giallorossa è completa."
    },

    napoli: {
        genin: "🔵 Hai ottenuto il rango Genin del Napoli!",
        chunin: "🌊 Chunin del Napoli! Il tuo talento emerge.",
        jonin: "⚡ Jonin del Napoli! Il tuo potere è temuto.",
        kage: "🏆 Kage del Napoli! Sei il simbolo della squadra."
    },

    juventus: {
        genin: "⚪⚫ Genin della Juventus! Inizia la tua carriera.",
        chunin: "⭐ Chunin della Juventus! Nuove responsabilità ti attendono.",
        jonin: "🛡️ Jonin della Juventus! La tua esperienza fa la differenza.",
        kage: "🏆 Kage della Juventus! Hai raggiunto il massimo livello."
    }

};

/* =========================
   APP STATE
========================= */

const state = {
    level: Number(sessionStorage.getItem("level")) || 0,
    theme: sessionStorage.getItem("theme") || "roma"
};

/* =========================
   DOM REFERENCES
========================= */

const app = document.querySelector("#app");

/* =========================
   DOM CREATION
========================= */

const container = document.createElement("div");
container.classList.add("container");

const title = document.createElement("h1");
title.textContent = "🥷⚽ Ninja League";
title.classList.add("title");

const subtitle = document.createElement("p");
subtitle.textContent =
    "Scegli la tua squadra. Allena il tuo ninja. Diventa Kage.";
subtitle.classList.add("subtitle");

const ninjaImage = document.createElement("img");
ninjaImage.classList.add("ninja-image");

const levelText = document.createElement("div");
levelText.classList.add("level");

const rankText = document.createElement("div");
rankText.classList.add("rank");

const messageText = document.createElement("div");
messageText.classList.add("message");

const progressContainer = document.createElement("div");
progressContainer.classList.add("progress");

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");

progressContainer.appendChild(progressBar);

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons");

const minusBtn = document.createElement("button");
minusBtn.textContent = "-";
minusBtn.classList.add("minus-btn");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("reset-btn");

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
plusBtn.classList.add("plus-btn");

buttonsContainer.append(
    minusBtn,
    resetBtn,
    plusBtn
);

const themeSelect = document.createElement("select");
themeSelect.classList.add("theme-select");

themes.forEach(theme => {

    const option = document.createElement("option");

    option.value = theme.value;

    option.textContent = theme.label;

    themeSelect.appendChild(option);

});

themeSelect.value = state.theme;

/* =========================
   GAME LOGIC
========================= */

function getCurrentRank() {

    let currentRank = ranks[0];

    ranks.forEach(rank => {

        if (state.level >= rank.minLevel) {
            currentRank = rank;
        }

    });

    return currentRank;
}

function increaseLevel() {

    if (state.level < 100) {

        state.level++;

        updateUI();

    }

}

function decreaseLevel() {
    if (state.level > 0) {
        state.level--;
        updateUI();
    }
}

function resetLevel() {
    state.level = 0;
    updateUI();
}

/* =========================
   UI FUNCTIONS
========================= */

function updateProgressColor() {

    const gradients = {
        roma:
            "linear-gradient(90deg, #f7c100, #a41e22)",

        napoli:
            "linear-gradient(90deg, #00a8ff, #004aad)",

        juventus:
            "linear-gradient(90deg, #ffffff, #555555)"
    };

    progressBar.style.background =
        gradients[state.theme];
}

function updateCardTheme() {

    container.classList.remove(
        "card-roma",
        "card-napoli",
        "card-juventus"
    );

    container.classList.add(
        `card-${state.theme}`
    );
}

function updateProgressBar() {

    const maxLevel = 100;

    const percentage = Math.min(
        (state.level / maxLevel) * 100,
        100
    );

    progressBar.style.width = `${percentage}%`;
}

function updateTheme() {

    document.body.className = "";

    document.body.classList.add(
        `theme-${state.theme}`
    );

}

function animateLevel() {

    levelText.classList.remove("pop");

    void levelText.offsetWidth;

    levelText.classList.add("pop");
}

function updateUI() {

    const currentRank = getCurrentRank();
    const rankKey = currentRank.title.toLowerCase();

    // Mostra messaggio solo in caso di promozione
    if (
        previousRank &&
        rankOrder[rankKey] > rankOrder[previousRank]
    ) {

        const message =
            rankMessages[state.theme]?.[rankKey];

        if (message) {

            messageText.textContent = message;

            messageText.classList.remove(
                "show-message"
            );

            void messageText.offsetWidth;

            messageText.classList.add(
                "show-message"
            );

            clearTimeout(
                messageText.timeoutId
            );

            messageText.timeoutId =
                setTimeout(() => {

                    messageText.textContent = "";

                }, 2000);

        }

    }

    previousRank = rankKey;

    levelText.textContent =
        `Livello ${state.level}`;

    rankText.textContent =
        `Rank: ${currentRank.title}`;

    ninjaImage.src =
        `./img/ninja/${state.theme}/${currentRank.image}`;

    ninjaImage.alt =
        currentRank.title;

    updateProgressBar();
    updateTheme();
    updateCardTheme();
    updateProgressColor();
    animateLevel();
    saveState();

}

/* =========================
   STORAGE
========================= */

function saveState() {

    sessionStorage.setItem(
        "level",
        state.level
    );

    sessionStorage.setItem(
        "theme",
        state.theme
    );

}

/* =========================
   EVENT HANDLERS
========================= */

plusBtn.addEventListener(
    "click",
    increaseLevel
);

minusBtn.addEventListener(
    "click",
    decreaseLevel
);

resetBtn.addEventListener(
    "click",
    resetLevel
);

themeSelect.addEventListener(
    "change",
    (event) => {

        const confirmChange = confirm(
            "Cambiando squadra il livello verrà azzerato. Continuare?"
        );

        if (!confirmChange) {
            themeSelect.value = state.theme;
            return;
        }

        state.theme = event.target.value;
        state.level = 0;

        updateUI();

    }
);

/* =========================
   DOM MOUNTING
========================= */

container.append(
    title,
    subtitle,
    ninjaImage,
    levelText,
    rankText,
    messageText,
    progressContainer,
    buttonsContainer,
    themeSelect
);

app.appendChild(container);

/* =========================
   INIT
========================= */

updateUI();