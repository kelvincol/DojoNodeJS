/*
Neste problema, você deverá testar de 1 a 20, com as seguintes exceções:

Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
Senao for divisivel retorna o próprio número.

*/

const isDivisivel = (n) => {
    if((n) % 5 == 0 && (n) % 3 == 0){
        return "FizzBuzz"
    }
    else if((n) % 5 == 0){
        return "Buzz"
    }
    else if ((n) % 3 == 0){
        return "Fizz"
    }
    else {
        console.log(n)
    }
}
  


export {isDivisivel} 