// - Desafio buble sort V
// Ordernar um vetor de 100 números inteiros gerados aleatoriamente e estudar bubble sort.

var arrayAleatorios = [];
var arrayOrdenados = [];

function geraArrayAleatorio(tamanhoArray){
    for(var i = 0; i < tamanhoArray; i++){
        arrayAleatorios.push(Math.floor(Math.random() * 100));
    }
    return arrayAleatorios;
}

function bubleSort(array){
    var mudaPosicao;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                mudaPosicao = array[j];
                array[j] = array[j+1];
                array[j+1] = mudaPosicao;
            }
        }
    }
    return array;
}

array100Aleatorios = geraArrayAleatorio(5);
console.log("O array com números aleatórios é:\n" + array100Aleatorios + ". Fim.\n");

array100Ordenado = bubleSort(array100Aleatorios);
console.log("O array com números organizados é: "+array100Ordenado+ ". Fim.");

