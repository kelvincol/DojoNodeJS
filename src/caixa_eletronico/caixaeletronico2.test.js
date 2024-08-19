import { saque } from "./caixaeletronico2"

test('teste saque 80', () => {
const resultado = saque(80)
    expect(resultado.notasCem).toEqual(0)
    expect(resultado.notasCinquenta).toEqual(1)
    expect(resultado.notasVinte).toEqual(1)
    expect(resultado.notasDez).toEqual(1)

})

test('teste saque 1600', () => {
    const resultado = saque(1600)
        expect(resultado.notasCem).toEqual(16)
        expect(resultado.notasCinquenta).toEqual(0)
        expect(resultado.notasVinte).toEqual(0)
        expect(resultado.notasDez).toEqual(0)
    
    })