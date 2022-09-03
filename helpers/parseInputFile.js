const fs = require('fs/promises')
const { inputFilePath } = require('../filePaths')

async function parseInputFile() {
    try {
        const data = await fs.readFile(inputFilePath, 'utf8')

        const matchResults = data.split('\n')

        if (matchResults[matchResults.length - 1] === '') {
            matchResults.pop()
        }

        return matchResults
    } catch(e) {
        throw new Error('Could not read input file')
    }
}

module.exports = parseInputFile
