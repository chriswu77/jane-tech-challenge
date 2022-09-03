const path = require('path')

const INPUT_FILENAME = 'sample-input.txt'

const inputFilePath = path.join(__dirname, 'input', INPUT_FILENAME)
const outputFilePath = path.join(__dirname, 'output', 'output.txt')

exports.inputFilePath = inputFilePath
exports.outputFilePath = outputFilePath
