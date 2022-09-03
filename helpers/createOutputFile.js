const fs = require('fs/promises')
const { outputFilePath } = require('../filePaths')

async function createOutputFile(outputStr) {
    try {
        await fs.writeFile(outputFilePath, outputStr)
    } catch(e) {
        throw new Error('Could not create output file')
    }
}

module.exports = createOutputFile
