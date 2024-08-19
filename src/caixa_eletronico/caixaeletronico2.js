
const saque =(valor) => {
    const notasCem = parseInt(valor/100)
    let resto100 = valor % 100
    const notasCinquenta = parseInt(resto100/50)
    resto100 = resto100 % 50
    const notasVinte = parseInt(resto100/20)
    resto100 = resto100 % 20
    const notasDez = parseInt(resto100/10)
    resto100 = resto100 % 10
    return {notasCem, notasCinquenta, notasVinte, notasDez}
}

export {saque}