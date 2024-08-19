import { generateDefaultOutputFilePath } from "./fileUtils.js"

import { __filename } from './fileSystem.js'
jest.mock('./fileSystem.js')





test('calcular outputPath', () => {
    __filename.mockImplementation(() => 'C://domingao/faustao')
    
    const resultado = generateDefaultOutputFilePath('fausto', 1, 'txt')  
    expect(resultado).toEqual('C://domingao/output/fausto.txt')
})