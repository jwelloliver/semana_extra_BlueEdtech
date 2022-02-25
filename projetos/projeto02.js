var prompt = require('prompt-sync')();

// Inicio do Jogo
console.log("### Jogo do Dados ###\n")

// Variavel entrada quantidade rodadas
let rodadas = +prompt("quantas Rodadas você que fazer?: ");

// Variavel quantidade de jogadores
let numeroJogadores = +prompt("\nQuantos Jogadores vão jogar?: ");

// Variavel contadora do while
let cont = 0;

// Variavel para valor do dado escolhido
let numero1 = 0;

// Variavel de entrada do nome do jagador
let nome1 = '';

// Lista onde sera armazenada o objeto de cada Jogador
const listaJogadores = [];

// Lista dos valores do dado
const dados = ['1','2','3','4','5','6'];

// funçao construtora para cada novo objeto jogador
function jogador(nome,numero) {
    this.nome = nome;
    this.numero = numero;
}

// Aqui iniciar o laço por quantidade de rodadas escolhido
while (cont < rodadas) {
    
    // Inicio do laço de repetição por qunatidade de jogadores
    for (let i = 0; i < numeroJogadores; i++) {
            
        nome1 = prompt(`Digite o nome do Jogador ${i+1} :`); // Entrada do nome do Jogador
            
        numero1 = dados[Math.floor(Math.random() * dados.length)]; // Sorteio aleatorio do valor do dado jogado usando o valores dentro da lista dados.
        
        console.log(`\n O valor do dado e: ${numero1}`) // impressão do valor do dado
        
        const jogadores = new jogador(nome1,numero1); // Usando a função construtura, para criação de um novo objeto para cada jogador 
        
        listaJogadores.push(jogadores); // Armazenando os novos objetos dentro de uma lista 
            
        }// Finalizando o laço for.


     cont++; // Contador para rodar while de acordo quantidade de rodadas
    } // Finalizando o laço while

// Funçao ordenar objeto dentro da lista pelo valor do numero do menor para maior
listaJogadores.sort(function(valorA,valorB){
    return valorA.numero - valorB.numero;
});

console.log(listaJogadores);