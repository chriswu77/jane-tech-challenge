function getMatchDayResultsString(results, matchDay, isLastMatch = false) {
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

module.exports = getMatchDayResultsString
