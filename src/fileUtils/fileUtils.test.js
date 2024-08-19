import { generateDefaultOutputFilePath } from "./fileUtils.js"




test('calcular outputPath', () => {
    
    const resultado = generateDefaultOutputFilePath('fausto', 1, 'txt')  
    expect(resultado).toEqual('C:\\node ze lessons\\output\\fausto1.txt')
})

