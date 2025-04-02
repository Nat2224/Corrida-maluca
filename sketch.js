function setup() {
  createCanvas(600, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#C8C8C8");
  } else {
    background("rgb(159,159,159)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🟥", xJogador1, 50);
  text("🟧", xJogador2, 150);
  text("🟨", xJogador3, 250);
  text("🟩", xJogador4, 350);
}
function desenhaLinhaDeChegada() {
  rect(350, 0, 20, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Vermelho venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Laranja venceu!", 50, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("Amarelo venceu!", 50, 200);
    noLoop();
  }
    if (xJogador4 > 350) {
    text("Verde venceu!", 50, 200);
    noLoop();
  }
   text("A, L, S, K", 130, 50,);
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "l") {
    xJogador2 += random(20);
  }
   if (key == "s") {
    xJogador3 += random(20);
  }
     if (key == "k") {
    xJogador4 += random(20);
  }
 
}
