//Declaração de variáveis
let nome = 'Eu'
let numero_inteiro = 3
let numero_flutuante = 2.576
let condicao = false

/*
console.log(typeof nome)
console.log(typeof numero_inteiro)
console.log(typeof numero_flutuante)
console.log(typeof condicao)
*/

let numero1 = parseInt(prompt('Informe um número: '))
let numero2 = parteInt(prompt('Informe outro número: '))

let soma = numero1 + numero2
let subs = numero1 - numero2
let mults = numero1 * numero2
let divs = numero1 / numero2


document.write('A soma é', soma)
document.write('A subtração é' ,subs)
document.write('A multiplicaçao é', mults)
document.write('A divisão é', divs)

