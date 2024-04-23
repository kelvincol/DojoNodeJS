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
    const texto = numeroCel('7777_33_6_7_777_33_0_2_222_33_7777_7777_666_0_666_0_3_666_5_666_7_88_9999_9999_555_33_7777')  
    expect(texto).toEqual('SEMPRE ACESSO O DOJOPUZZLES')
})