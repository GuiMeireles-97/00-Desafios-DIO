// Define os niveis do Rank
let niveisRank = {1:"Ferro", 2:"Bronze", 3:"Prata", 4:"Ouro", 5:"Diamante", 6:"Lendário", 7:"Imortal"};

//Quantidade de vitorias e derrotas do herói
let vitorias = 10
let derrotas = 2


//Define a função para calculo do saldo de vitórias
function calcularPartida(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas // Calculo do saldo
    
    switch(true){ //Define em qual nivel o herói está
    
    case saldoVitorias <= 10:
    	return [saldoVitorias, 1]; // Nível Ferro
        
    case saldoVitorias >= 11 && saldoVitorias <= 20:
    	return [saldoVitorias, 2]; // Nível Bronze
        
    case saldoVitorias >= 21 && saldoVitorias <= 50:
        return [saldoVitorias, 3]; // Nível Prata

    case saldoVitorias >= 51 && saldoVitorias <= 80:
    	return [saldoVitorias, 4]; // Nível Ouro
        
    case saldoVitorias >= 81 && saldoVitorias <= 90:
        return [saldoVitorias, 5]; // Nível Diamante
        
    case saldoVitorias >= 91 && saldoVitorias <= 100:
    	return [saldoVitorias, 6]; // Nível Lendário
        
    case saldoVsitorias >= 101:
        return [saldoVitorias, 7];  // Nível Imortal         
	}
}


let [saldoVitorias, nivel] = calcularPartida(vitorias, derrotas);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${niveisRank[nivel]}`);
