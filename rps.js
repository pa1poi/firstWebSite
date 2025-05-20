let user = 0;
let draw = 0;
let comp = 0;

let choice1 = document.querySelector(".rock");
let choice2 = document.querySelector(".paper");
let choice3 = document.querySelector(".scissors");
const rb = document.querySelector(".rb");
let you1 = document.querySelector(".you p:last-child");
let you2 = document.querySelector(".draw p:last-child");
let you3 = document.querySelector(".computer p:last-child");
let T = document.querySelector("#UI");
let Y = document.querySelector("#CI");


choice1.addEventListener("click", function () {
    const c1 = "rock";
    console.log(`You chose ${c1}`);
    playgame(c1);
});
choice2.addEventListener("click", function () {
    const c2 = "paper";
    console.log(`You chose ${c2}`);
    playgame(c2);
});
choice3.addEventListener("click", function () {
    const c3 = "scissor";
    console.log(`You chose ${c3}`);
    playgame(c3);
});


const compchoice = () => {
    const choices2 = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    const c = choices2[random];
    console.log(`Computer chose ${c}`);
    return c;
}


const ysi = () => {
    you1.innerText = Number(you1.innerText) + 1;
}

const dsi = () => {
    you2.innerText = Number(you2.innerText) + 1;
}

const csi = () => {
    you3.innerText = Number(you3.innerText) + 1;
}


const dg = () => {
        rb.innerText = "game is draw";
}

const uw = () => {
    rb.innerText = "user wins";
}

const ul = () => {
    rb.innerText = "computer wins";
}

const playgame = (uc) => {
    console.log("Game started");
    console.log(`user choice is ${uc}`);

    const cc = compchoice();
    console.log(`Computer choice is ${cc}`);

    // Show choices in UI and CI
    document.querySelector("#UI").innerText = uc;
    document.querySelector("#CI").innerText = cc;

    if (uc === cc) {
        console.log("It's a tie");
        dg();
        draw++;
        dsi();
    } else if (
        (uc === "rock" && cc === "scissor") ||
        (uc === "paper" && cc === "rock") ||
        (uc === "scissor" && cc === "paper")
    ) {
        console.log("You win");
        uw();
        user++;
        ysi();
    } else {
        console.log("Computer wins");
        ul();
        comp++;
        csi();
    }

    console.log(`User score is ${user}`);
    console.log(`Computer score is ${comp}`);
    console.log(`Draw score is ${draw}`);
}