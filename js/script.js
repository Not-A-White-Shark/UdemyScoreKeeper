const btnJ1 = document.querySelector("#btnJ1");
const btnJ2 = document.querySelector("#btnJ2");
const btnResetar = document.querySelector("#btnResetar");
const j1Display = document.querySelector("#j1Display");
const j2Display = document.querySelector("#j2Display");
const lblJogandoPor = document.querySelector("#lblJogandoPor");
const jogandoPor = document.querySelector("#jogandoPor");
let j1Score = 0;
let j2Score = 0;
let gameOver = false;
let scoreVencedor = 5;

lblJogandoPor.value = scoreVencedor;

function checar() {
    if (lblJogandoPor.value === "0") {
        j1Display.classList.add("vencedor");
        j2Display.classList.add("vencedor");
        gameOver = true;
    } else if (lblJogandoPor.value === "") {
        j1Display.classList.add("vencedor");
        j2Display.classList.add("vencedor");
        gameOver = true;
    } else if (Number(lblJogandoPor.value) < 0) {
        lblJogandoPor.value = 0;
        j1Display.classList.add("vencedor");
        j2Display.classList.add("vencedor");
        gameOver = true;
    } else if (Number(lblJogandoPor.value) % 1 !== 0) {
        lblJogandoPor.value = Math.floor(Number(lblJogandoPor.value));
    }
    scoreVencedor = lblJogandoPor.value;
    jogandoPor.textContent = scoreVencedor;
    console.log(scoreVencedor);
}

lblJogandoPor.addEventListener("change", resetar);


btnJ1.addEventListener("click", function() {
    if (!gameOver) {
        j1Score++;
    }
    if (j1Score === Number(scoreVencedor)) {
        gameOver = true;
        j1Display.classList.add("vencedor");
    }
    j1Display.textContent = j1Score;
    console.log("O score do jogador 1 é = " + j1Score);


});

btnJ2.addEventListener("click", function() {
    if (!gameOver) {
        j2Score++;
    }
    if (j2Score === Number(scoreVencedor)) {
        gameOver = true;
        j2Display.classList.add("vencedor");
    }
    j2Display.textContent = j2Score;
    console.log("O score do jogador 2 é = " + j2Score);
});

function resetar() {
    j1Score = 0;
    j2Score = 0;
    gameOver = false;
    j1Display.classList.remove("vencedor");
    j2Display.classList.remove("vencedor");
    j1Display.textContent = j1Score;
    j2Display.textContent = j2Score;
    console.log("O score foi zerado " + j1Score + " a " + j2Score);
    checar();
}

btnResetar.addEventListener("click", resetar);