import {validaAno} from './anoBisexto.js'

test('testa ano bisexto', () => {
    expect(validaAno(1600)).toBe(true);
    expect(validaAno(1732)).toBe(true);
    expect(validaAno(1888)).toBe(true);
    expect(validaAno(1944)).toBe(true);
    expect(validaAno(2008)).toBe(true);

});

test('testa ano nao bisexto', () => {
    expect(validaAno(1742)).toBe(false);
    expect(validaAno(1889)).toBe(false);
    expect(validaAno(1951)).toBe(false);
    expect(validaAno(2011)).toBe(false);
});