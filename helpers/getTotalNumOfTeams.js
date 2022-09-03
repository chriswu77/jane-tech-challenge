const parseStringIntoTuples = require('./parseStringIntoTuples')

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

module.exports = getTotalNumOfTeams
