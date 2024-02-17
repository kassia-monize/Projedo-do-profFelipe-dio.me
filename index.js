let nome = "Castello";
let XP = 7500
let Nivel;
let contador = 0

switch(true){
    case(XP <= 1000):
    Nivel = "Ferro";
    breack;

    case(XP <= 2000 && XP > 1000):
    Nivel = "Bronze";
    break;

    case(XP <= 5000 && XP > 2000):
    Nivel = "Prata";
    break;

    case(XP <= 7000 && XP > 5000):
    Nivel = "Ouro";
    break;

    case(XP <= 8000 && XP > 7000):
    Nivel = "Platina";
    break;

    case(XP <= 9000 && XP > 8000):
    Nivel = "Ascendente";
    break;

    case(XP <= 10000 && XP > 9000):
    Nivel = "Imortal";
    break;

    default:
        console.log("Radiante");
}
console.log("Olá " + nome + "! Nesta fase você realizou " + XP + " pontos, chegando ao Nível " + Nivel + "!")
while (contador < 1){
    console.log("Parabéns " + nome + "! Você está no reino Portal dos Nômades!!")
    contador++
}

Olá Castello! Nesta fase você realizou 7500 pontos, chegando ao Nível Platina!
Parabéns Castello! Você está no reino Portal dos Nômades!!
