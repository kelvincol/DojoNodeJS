 test('', () => {
   // poder ser vazia ou inicializada com valores
   const listaMarota = [1,2,3, true] 

   listaMarota.push(4) //push quer dizer "adicionar"
   console.log('listaMarota antes: ' + listaMarota)

   //remover objetos do final
    listaMarota.pop()
    //remove objetos do inicio
    listaMarota.shift()

    //variavel interna da lista que exibe o tamanho
    listaMarota.length

    //acessar o objeto na posicao desejada

    listaMarota[1]//lembrando que a lista começa da posicao 0

    console.log('listaMarota: ' + listaMarota)
    console.log('\nlistaMarota tamanho : ' + listaMarota.length)
    console.log('\nlistaMarota posicao 1 : ' + listaMarota[0])
    console.log('\nlistaMarota posicao 2 : ' + listaMarota[1])
    console.log('\nlistaMarota posicao 3 : ' + listaMarota[2])

    /*
    for(){

    }
    dentro dos parenteses deve ter uma variavel e a lista dela
    dentro das chaves ocorre o laço
    */
    //iterar na lista
    let contadorVoltas = 1
    const lista2 = ['a', 'b', 'c', 'd', 'e']
    for(const item of lista2){
        console.log('posicao: ' + contadorVoltas + ' objeto atual: ' + item)

        contadorVoltas = contadorVoltas + 1
    }

    const lista3 = [1,2,3,4,5,6,7,8,9]
    const listaResultado = []
    for(const tralala of lista3){
        if(tralala < 5){
            listaResultado.push(tralala)
        }
    }

    expect(listaResultado).toEqual([1,2,3,4])
    console.log(listaResultado)
})

/* 

Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico. Os requisitos básicos são os seguintes:

    Entregar o menor número de notas;
    É possível sacar o valor solicitado com as notas disponíveis;
    Saldo do cliente infinito;
    Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do problema);
    Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

Exemplos:

    Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
    Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00. 

*/