import { numero } from "./numeracaoRomana";


test('transformar indo-arabico em numero romano', () => {
    const resultado = numero(1)  
    expect(resultado).toEqual('I')
})

test('transformar indo-arabico em numero romano', () => {
    const resultado = numero(2)  
    expect(resultado).toEqual('II')
})

test('transformar indo-arabico em numero romano', () => {
    const resultado = numero(19)  
    expect(resultado).toEqual('XIX')
})

test('transformar numero romano em numero indio-arabico', () => {
    const resultado = numero('I')  
    expect(resultado).toEqual(1)
})

test('transformar numero romano em numero indio-arabico', () => {
    const resultado = numero('II')  
    expect(resultado).toEqual(2)
})

test('transformar numero romano em numero indio-arabico', () => {
    const resultado = numero('XIX')  
    expect(resultado).toEqual(19)
})