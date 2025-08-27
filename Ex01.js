const consumoMedio = 12.5;
const precoDoLitro = 6.44;
const tempoDeViagem = 4;
const velocidadeMedia = 100;
let distancia = tempoDeViagem*velocidadeMedia;
let quantidadeDeLitros = distancia/consumoMedio;
let custo = quantidadeDeLitros*precoDoLitro;

console.log("Custo da viagem R$: "+custo);