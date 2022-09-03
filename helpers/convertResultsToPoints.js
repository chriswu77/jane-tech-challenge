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

module.exports = convertResultsToPoints
