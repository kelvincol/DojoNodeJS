import { numeroCel } from "./celular.js";

test('testa numero a', () => {
    const texto = numeroCel('2')  
    expect(texto).toEqual('A')
})

test('testa numero b', () => {
    const texto = numeroCel('22')  
    expect(texto).toEqual('B')
})

test('testa numero b', () => {
    const texto = numeroCel('222')  
    expect(texto).toEqual('C')
})

test('testa numero BA', () => {
    const texto = numeroCel('22_2')  
    expect(texto).toEqual('BA')
})

test('testa numero SEMPRE ACESSO O DOJOPUZZLES', () => {
    const texto = numeroCel('77773367_7773302_222337777_777766606660366656667889999_9999555337777')  
    expect(texto).toEqual('SEMPRE ACESSO O DOJOPUZZLES')
})