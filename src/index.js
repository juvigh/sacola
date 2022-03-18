const {somar} = require('../lib/funcoes')
const {frutas} = require('../model/dados')
const moment = require('moment')

function listaFrutas() {
    
    let valorTotal = 0;
    for(let i = 0; i < frutas.length; i++){

        valorTotal += somar(frutas[i].valor)

        console.log(frutas[i].id, frutas[i].nome, "-" ,frutas[i].valor)
     
           
    } console.log(" Total da compra: ", valorTotal.toFixed(0))
    
    let dinheiro = 100;

if(dinheiro >= valorTotal) {
    console.log('Status: Compra foi feita com sucesso')
} else {
    console.log('Status: Você não possui dinheiro suficiente')
}

}         

/*function statusCompra() { let dinheiro = 0;

if(dinheiro >= valortotal) {
    console.log('Status: Compra feita com sucesso')
} else {
    console.log('Status: Você não possui dinheiro suficiente')
}
}*/

/* transformar o switch em uma funcao para exibi-lo
function validarFrutas() {

    switch (frutas) {
    case 'Abacaxi': console.log('Está em estoque');
    case 'Uva': console.log('Está em estoque');
    case 'Laranja': console.log('Está em estoque');
    case 'Mamão': console.log('Está em estoque');
    case 'Morango': console.log('Está em estoque');
    case 'Banana': console.log('Está em estoque');
    default: console.log('Não temos disponível');}
}
*/
// esse vai ser o programa com todas as informações 
exports.principal = () => {
    const data = moment().format('DD/MM/YYYY hh:mm')
    console.log('      Cliente - José Figueiredo      ')
    
    console.log('      Sacola de frutas      ' + data + '   ')

    listaFrutas()
    //statusCompra()
}

//exports.validacao = () => {
  //  validarFrutas()
        
//}

/*function validarFrutas() { 
  listaFrutas()

    var selecionarFruta = 'Uva'

    if (selecionarFruta === frutas[i].name) {
    console.log('Esta fruta está disponível na lista')
} else {
    console.log('Esta fruta não foi adquirida')
}

} */

/*function validarFrutas() {
for(a = 0; a < frutas.length; a++){

    let selecionarFruta = 'Laranja'

           if (selecionarFruta == frutas[a].nome) {
           
            console.log('A fruta', selecionarFruta, 'foi adquirida')
    
        } else {
           console.log('A fruta', selecionarFruta, 'não foi adquirida')
        }
    }
}

exports.validacao = () => {
    validarFrutas()
}*/