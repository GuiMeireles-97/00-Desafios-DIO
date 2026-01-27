let nome = "Mugetsu" // Define o nome do herói
let xpAtual = 80000 // Define a quantidade de XP do herói

// Define todos os níveis de herói
let nivel = 0
let niveis = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]


// Verifica a quantidade de XP do herói e indica em qual nível ele está
if (xpAtual <= 1000){
    nivel = 0;
}
else if (xpAtual >= 1001 && xpAtual <= 2000){
    nivel = 1;
}
else if (xpAtual >= 2001 && xpAtual <= 5000){
    nivel = 2;
}
else if (xpAtual >= 5001 && xpAtual <= 7000){
    nivel = 3;
}
else if (xpAtual >= 7001 && xpAtual <= 8000){
    nivel = 4;
}
else if (xpAtual >= 8001 && xpAtual <= 9000){
    nivel = 5;
}
else if (xpAtual >= 9001 && xpAtual <= 10000){
    nivel = 6;
}
else if (xpAtual >= 10001){
    nivel = 7;
}

// Exibe para o usuário o nome e o nível do herói
console.log("O Heroi de nome " + nome + " está no nível de " + niveis[nivel]
)
