const fs = require('fs/promises')
const path = require('path')

const inputFilePath = path.join(__dirname, 'input', 'sample-input.txt')
const outputFilePath = path.join(__dirname, 'output', 'output.txt')

async function printGameResults() {
    try {
        const inputResults = await parseInput()

        const totalNumOfTeams = getTotalNumOfTeams(inputResults)
        const gamesPerDay = totalNumOfTeams / 2
    
        const teamScoresMap = {}
        let matchDayCount = 1
        let outputStr = ''

        for (let i = 0; i < inputResults.length; i += gamesPerDay) {
            let j = i
    
            while (j < i + gamesPerDay) {
                const tuples = parseStringIntoTuples(inputResults[j])
    
                const team1Name = tuples[0][0]
                const team2Name = tuples[1][0]
    
                if (!teamScoresMap[team1Name]) teamScoresMap[team1Name] = 0
                if (!teamScoresMap[team2Name]) teamScoresMap[team2Name] = 0
    
                const pointsMap = convertResultsToPoints(tuples)
    
                for (const [name, points] of Object.entries(pointsMap)) {
                    teamScoresMap[name] += points
                }
    
                j++
            }
    
            const topThreeScores = getTopThreeScores(teamScoresMap)
    
            const isLastMatch = (i + gamesPerDay) >= inputResults.length

            outputStr += getMatchDayResultsString(topThreeScores, matchDayCount, isLastMatch)
    
            matchDayCount++
        }

        console.log(outputStr)

        await createOutputFile(outputStr)
    } catch(e) {
        console.error(e)
    }
}

async function parseInput() {
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

function getTotalNumOfTeams(results) {
    const teams = new Set()

    for (const result of results) {
        const tuples = parseStringIntoTuples(result)
        const team1 = tuples[0][0]
        const team2 = tuples[1][0]

        if (teams.has(team1) || teams.has(team2)) return teams.size
        
        teams.add(team1)
        teams.add(team2)
    }

    return teams.size
}

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

function convertResultsToPoints(tuples) {
    const [team1Name, team1Score] = tuples[0]
    const [team2Name, team2Score] = tuples[1]

    const pointsMap = {}

    if (team1Score < team2Score) {
        pointsMap[team1Name] = 0
        pointsMap[team2Name] = 3
    } else if (team1Score > team2Score) {
        pointsMap[team1Name] = 3
        pointsMap[team2Name] = 0
    } else {
        pointsMap[team1Name] = 1
        pointsMap[team2Name] = 1
    }

    return pointsMap
}

function getTopThreeScores(scores) {
    const sortedScores = Object.keys(scores).sort((team1, team2) => {
        const diff = scores[team2] - scores[team1]

        if (diff === 0) {
            return team1.localeCompare(team2)
        }

        return diff
    })

    return sortedScores.slice(0, 3).map((teamName) => [teamName, scores[teamName]])
}

function getMatchDayResultsString(results, matchDay, isLastMatch) {
    let str = ''

    str += `Matchday ${matchDay}\n`

    for (const [teamName, score] of results) {
        str += `${teamName}, ${score} pt${score === 1 ? '' : 's'}\n`
    }
    
    if (!isLastMatch) {
        str += '\n'
    }

    return str
}

async function createOutputFile(outputStr) {
    try {
        await fs.writeFile(outputFilePath, outputStr)
    } catch(e) {
        throw new Error('Could not create output file')
    }
}

printGameResults()
