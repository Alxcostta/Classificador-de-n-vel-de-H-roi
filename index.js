// Definindo variáveis para o nome do herói e a quantidade de XP
const nomeHeroi = "Batman";
const xpHeroi = 11000;

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para determinar o nível do herói com base na quantidade de XP
//Se XP for menor do que 1.000 = Ferro 
//Se XP for entre 1.001 e 2.000 = Bronze 
//Se XP for entre 2.001 e 5.000 = Prata 
//Se XP for entre 5.001 e 7.000 = Ouro 
//Se XP for entre 7.001 e 8.000 = Platina 
//Se XP for entre 8.001 e 9.000 = Ascendente 
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

if (xpHeroi < 1000){
    nivelHeroi = "Ferro";
}

else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelHeroi = "Bronze";
}

else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelHeroi = "Prata";
}

else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelHeroi = "Ouro";
}

else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelHeroi = "Platina";
}

else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente";
}

else if (xpHeroi >= 9001 && xpHeroi <= 10.000){
    nivelHeroi = "Imortal";
}

else if (xpHeroi >= 10001){
    nivelHeroi = "Radiante";
}

// Exibindo a mensagem final
console.log (`O Héroi ${nomeHeroi} está no nível ${nivelHeroi}!`);