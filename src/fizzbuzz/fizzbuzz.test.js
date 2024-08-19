import { isDivisivel } from './fizzbuzz.js'

test('verifica numero divisivel por 3, 5 ou ambos', () => {
    expect(isDivisivel(5)).toBe("Buzz")
    expect(isDivisivel(5)).toBe("Buzz")
    expect(isDivisivel(6)).toBe("Fizz")
  /*  expect(isDivisivel(6)).toBe(true)
    expect(isDivisivel(9)).toBe(true)
    expect(isDivisivel(10)).toBe(true)
    expect(isDivisivel(12)).toBe(true)
    expect(isDivisivel(15)).toBe(true)
    expect(isDivisivel(18)).toBe(true)
    expect(isDivisivel(20)).toBe(true)*/

})



