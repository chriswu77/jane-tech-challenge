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

module.exports = getTopThreeScores
