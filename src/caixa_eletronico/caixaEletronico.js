/*
Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:

    Entregar o menor número de notas;
    É possível sacar o valor solicitado com as notas disponíveis;
    Saldo do cliente infinito;
    Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do problema);
    Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

Exemplos:

    Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
    Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00. 

*/

 


const valor = 160

    const notasCaixa = [10, 20, 50, 100]
    const notasCem = parseInt(valor/100)
    let resto100 = valor % 100
    const notasCinquenta = parseInt(resto100/50)
    resto100 = resto100 % 50
    const notasVinte = parseInt(resto100/20)
    resto100 = resto100 % 20
    const notasDez = parseInt(resto100/10)
    resto100 = resto100 % 10

    const valorSaque = []
    for(const saque of notasCaixa){
        if(saque % 10 == 0){
            valorSaque.push(saque)
        }
    }


console.log( `Seu saque foi de ${valor} reais, composto por:`,
     `\n ${notasCem} notas de Cem,`,
     `\n ${notasCinquenta} notas de Cinquenta,`,
     `\n ${notasVinte} notas de Vinte,`,
     `\n ${notasDez} notas de Dez.`)


  

