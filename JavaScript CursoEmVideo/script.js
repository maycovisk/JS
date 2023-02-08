var s = 'JavaScript'

console.log('Eu estou apresendo s'); //não faz iterpolação
console.log('Eu estou aprendendo '+ s); //usa concatenação
console.log(`Eu estou apredendo $(s)`); //usar template string

var n1 = 1234.5

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //formatar valor monetário

