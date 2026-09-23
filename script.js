/* =========================================
   STAR GENERATOR
========================================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


/* =========================================
   ENTER WEBSITE
========================================= */

function enterWebsite() {

    const intro =
        document.getElementById("intro");

    const main =
        document.getElementById("mainContent");

    intro.style.opacity = "0";

    intro.style.transition =
        "opacity 1s ease";

    setTimeout(() => {

        intro.style.display = "none";

        main.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

}


/* =========================================
   CHOICE MESSAGES
========================================= */

function showChoice(type) {

    const message =
        document.getElementById("choiceMessage");

    if (type === "smile") {

        message.innerHTML = `
            <span>
                Maa 😭 you're literally choosing
                the smile option while being sad.
                <br><br>
                Come on... give me one tiny smile.
                That's all I'm asking for. 🤍
            </span>
        `;

    }

    if (type === "comfort") {

        message.innerHTML = `
            <span>
                Come here, Thangoo. 🤍
                <br><br>
                You don't have to explain everything.
                You don't have to pretend you're okay.
                <br><br>
                Just breathe.
                I'm quietly rooting for you.
            </span>
        `;

    }

    if (type === "sweet") {

        message.innerHTML = `
            <span>
                Sayang...
                <br><br>
                If I could, I'd probably annoy you
                until you smiled again.
                😭
                <br><br>
                Unfortunately, I'm not there right now.
                So this website will have to do.
            </span>
        `;

    }

}


/* =========================================
   HEART GAME
========================================= */

let heartCount = 0;
let gameRunning = false;


/* =========================================
   START GAME
========================================= */

function startGame() {

    if (gameRunning) return;

    gameRunning = true;
    heartCount = 0;

    const count =
        document.getElementById("heartCount");

    const startScreen =
        document.getElementById("gameStart");

    const reward =
        document.getElementById("gameReward");

    /* Reset counter */
    count.textContent = heartCount;

    /* Hide the START button overlay */
    startScreen.style.display = "none";

    /* Hide reward if game is restarted */
    reward.classList.add("hidden");

    /* Start creating hearts */
    createHeart();
}


/* =========================================
   CREATE HEART
========================================= */

function createHeart() {

    if (!gameRunning) return;

    const area =
        document.getElementById("gameArea");

    /* Create heart */
    const heart =
        document.createElement("div");

    heart.className = "game-heart";

    /* Random heart design */
    const hearts = ["♡", "♥", "🤍"];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    /* =========================================
       RANDOM POSITION
    ========================================= */

    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const heartSize = 55;

    const maxX =
        Math.max(10, areaWidth - heartSize - 10);

    const maxY =
        Math.max(70, areaHeight - heartSize - 10);

    const randomX =
        Math.random() * maxX;

    const randomY =
        60 +
        Math.random() *
        Math.max(10, maxY - 60);


    heart.style.left =
        randomX + "px";

    heart.style.top =
        randomY + "px";


    /* =========================================
       CLICK HEART
    ========================================= */

    heart.addEventListener("click", function () {

        if (!gameRunning) return;

        heartCount++;

        document.getElementById("heartCount")
            .textContent = heartCount;


        /* Remove clicked heart */
        heart.remove();


        /* =========================================
           CHECK IF PLAYER CAUGHT 5
        ========================================= */

        if (heartCount >= 5) {

            gameRunning = false;

            document.getElementById("gameReward")
                .classList.remove("hidden");

            return;

        }


        /* Create next heart */
        setTimeout(() => {

            if (gameRunning) {
                createHeart();
            }

        }, 300);

    });


    /* Add heart to game */
    area.appendChild(heart);


    /* =========================================
       REMOVE HEART AFTER 5 SECONDS
    ========================================= */

    setTimeout(() => {

        if (
            heart.parentElement &&
            gameRunning
        ) {

            heart.remove();

            createHeart();

        }

    }, 5000);

}


/* =========================================
   NAVIGATION
========================================= */

function goToSection(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        const sections =
            document.querySelectorAll(".section");

        for (const section of sections) {

            if (section.contains(
                document.querySelector(".message-cards")
            )) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

                break;
            }

        }

    }

}

/* =========================================
   ENVELOPE
========================================= */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const button =
        document.querySelector(".envelope-button");

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        button.textContent =
            "Close letter 🤍";

    } else {

        button.textContent =
            "Open when you're ready 💌";

    }

}


/* =========================================
   FINAL REVEAL
========================================= */

function revealFinal() {

    const first =
        document.getElementById("finalReveal");

    const second =
        document.getElementById("finalMessage");

    first.style.opacity = "0";

    first.style.transition =
        "opacity 1s ease";

    setTimeout(() => {

        first.classList.add("hidden");

        second.classList.remove("hidden");

        second.style.animation =
            "fadeUp 1.5s ease";

    }, 1000);

}


/* =========================================
   FLOATING HEARTS
========================================= */

const floatingContainer =
    document.querySelector(".floating-hearts");

setInterval(() => {

    if (Math.random() > 0.5) return;

    const heart =
        document.createElement("div");

    heart.innerHTML =
        Math.random() > 0.5 ? "♡" : "🤍";

    heart.style.position =
        "fixed";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "-30px";

    heart.style.opacity =
        "0.15";

    heart.style.fontSize =
        (10 + Math.random() * 20) + "px";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex =
        "1";

    heart.style.transition =
        "transform 8s linear, opacity 8s linear";

    floatingContainer.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(180deg)`;

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 8500);

}, 1500);