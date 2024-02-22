/* Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

As regras são as seguintes:

Pedra empata com Pedra e ganha de Tesoura
Tesoura empata com Tesoura e ganha de Papel
Papel empata com Papel e ganha de Pedra


pedra = 0
tesoura = 1
papel = 2 */

const pedra = (n) => {
   
if ((n) == 0 )
    return "empate"

   else if ((n) == 1 )
    return "vitoria"
    
   else if ((n) == 2 )
    return "perdeu"
    
}

const tesoura = (n) => {
   
    if ((n) == 1 )
        return "empate"
    
       else if ((n) == 2 )
        return "vitoria"
        
       else if ((n) == 0 )
        return "perdeu"
        
    }

    const papel = (n) => {
   
        if ((n) == 2 )
            return "empate"
        
           else if ((n) == 0 )
            return "vitoria"
            
           else if ((n) == 1 )
            return "perdeu"
            
        }


export {pedra, tesoura, papel}
