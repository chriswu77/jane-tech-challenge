function parseStringIntoTuples(string) {
    const tuples = []

    const split = string.split(', ')

    split.forEach((nameAndScore) => {
        let lastSpaceIdx = -1

        for (let i = nameAndScore.length - 1; i >= 0; i--) {
            if (nameAndScore[i] === ' ') {
                lastSpaceIdx = i
                break
            }
        }

        const name = nameAndScore.slice(0, lastSpaceIdx)
        const score = parseInt(nameAndScore.slice(lastSpaceIdx + 1))

        tuples.push([name, score])
    })

    return tuples
}

module.exports = parseStringIntoTuples
