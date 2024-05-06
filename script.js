let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

let results = [
{oper: "Soma", calc: numberOne + numberTwo},
{oper: "Subtração", calc: numberOne - numberTwo},
{oper: "Multiplicação", calc: numberOne * numberTwo},
{oper: "Divisão", calc: numberOne / numberTwo},
{oper: "Resto", calc: numberOne % numberTwo},
]

for(let index = 0; index < 5; index++){
alert(`${results[index].oper} é igual a: ${results[index].calc}`)
}

if(results[0].calc % 2 == 0){
  alert(`A soma de ${numberOne} + ${numberTwo} é par: ${results[0].calc}`)
}

if(numberOne == numberTwo){
  alert("Os números são iguais")
}

// Fiz umas gracinhas desnecessárias, mas queria usar o maximo de coisas diferentes possiveis, mesmo que mais ficasse mais complexo doque deveria.