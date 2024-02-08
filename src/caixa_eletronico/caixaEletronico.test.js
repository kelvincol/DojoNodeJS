const valor = 160

    const notasCem = parseInt(valor/100)
    let resto100 = valor % 100
    const notasCinquenta = parseInt(resto100/50)
    resto100 = resto100 % 50
    const notasVinte = parseInt(resto100/20)
    resto100 = resto100 % 20
    const notasDez = parseInt(resto100/10)
    resto100 = resto100 % 10



console.log( `Seu saque foi de ${valor} reais, composto por:`,
     `\n ${notasCem} notas de Cem,`,
     `\n ${notasCinquenta} notas de Cinquenta,`,
     `\n ${notasVinte} notas de Vinte,`,
     `\n ${notasDez} notas de Dez.`)


     test('', () => {

        expect(notasCem).toEqual(1)
        expect(notasCinquenta).toEqual(1)
        expect(notasVinte).toEqual(0)
        expect(notasDez).toEqual(1)

})