import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);


const readFile = (fileName) => {
    return fs.readFileSync(fileName, 'utf8')
}

const getOutputPath = () => { 
    const __dirname = path.dirname(__filename) 
    return path.join(path.resolve(__dirname,'../', 'output'))
}


const generateDefaultOutputFilePath = (fileName, fileNumber, fileExtension) => {
    const rawFileName = path.parse(fileName)
    const inputFileName = rawFileName ? rawFileName.name : fileName
    const outputFileName = `${inputFileName}${fileNumber ? fileNumber : ''}.${fileExtension}`

    return path.join(getOutputPath(), outputFileName)
}



const totalFilesInFolder = (folderPath = getOutputPath()) => {
    const result = fs.readdirSync(folderPath)

    return result ? result.length : 1
}

const readFilesInFolder = (folderPath = getOutputPath()) => {
    return fs.readdirSync(folderPath)
}

const saveFile = async (fileContent, finalPath) => {
    const onlyPath = path.dirname(finalPath)
    
    if (!fs.existsSync(onlyPath)){
        await fs.promises.mkdir(onlyPath, { recursive: true })
    } 
   
    fs.writeFileSync(finalPath, fileContent)
}

const saveFileText = (inputFileName, fileNumber, fileContent) => {
    const fileNameWithPath = generateDefaultOutputFilePath(inputFileName, fileNumber, 'txt')

    fs.writeFileSync(fileNameWithPath, fileContent)
}

const saveJSONFile = async (fileContent, finalPath) => {
    await saveFile(JSON.stringify(fileContent, null, 4), finalPath)
}



export { readFile, saveFileText, totalFilesInFolder, generateDefaultOutputFilePath, readFilesInFolder, saveFile, saveJSONFile }