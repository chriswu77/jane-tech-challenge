const convertResultsToPoints = require('./helpers/convertResultsToPoints')
const createOutputFile = require('./helpers/createOutputFile')
const getMatchDayResultsString = require('./helpers/getMatchDayResultsString')
const getTopThreeScores = require('./helpers/getTopThreeScores')
const getTotalNumOfTeams = require('./helpers/getTotalNumOfTeams')
const parseInputFile = require('./helpers/parseInputFile')
const parseStringIntoTuples = require('./helpers/parseStringIntoTuples')

async function printGameResults() {
    try {
        const inputResults = await parseInputFile()

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

printGameResults()
