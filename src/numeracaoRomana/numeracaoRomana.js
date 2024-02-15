const numero = (valor) => {

    const romanosParaValores = {
        'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
        'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
        'X': 10, 'IX': 9, 'V': 5, 'IV': 4,
        'I': 1
    }
    
      if (isNaN(valor)) {
        let resultado = 0;
    // for(const posicao of valor)
        for (let i = 0; i < valor.length; i++) {
          const valorAtual = romanosParaValores[valor[i]];
          const proximoValor = romanosParaValores[valor[i + 1]];
    
          if (proximoValor > valorAtual) {
            resultado += proximoValor - valorAtual;
            i++;
          } else {
            resultado += valorAtual;
          }
        }
        console.log(resultado)
        return resultado;

      } 
      else {

    const valores = [1000, 500, 100, 50, 10, 9, 5, 4, 1]
    const letrasRomana = ['M', 'D', 'C', 'L', 'X','IX','V','IV','I']
    let restante = valor
    let resultado = []

    while (restante > 0){
        for (let numeroRomano = 0; numeroRomano < valores.length; numeroRomano++){
            if(restante >= valores[numeroRomano]){
                resultado = resultado + letrasRomana[numeroRomano];
                restante = restante - valores[numeroRomano];
                break
            }
        }
    }
    console.log(resultado)
    return resultado
}  
}

export {numero}

/*or (const [key, value] of Object.entries(object1)) {
  console.log(${key}: ${value});
}*/