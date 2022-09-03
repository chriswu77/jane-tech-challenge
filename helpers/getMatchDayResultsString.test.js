const getMatchDayResultsString = require('./getMatchDayResultsString')

describe('getMatchDayResultsString', () => {
    test('given top 3 scores and match day, return string in output format', () => {
        const top3 = [['Santa Cruz Slugs', 10], ['Aptos FC', 9], ['San Jose Earthquakes', 6]]

        const expected = 'Matchday 3\nSanta Cruz Slugs, 10 pts\nAptos FC, 9 pts\nSan Jose Earthquakes, 6 pts\n\n'

        expect(getMatchDayResultsString(top3, 3, false)).toBe(expected)
    })

    test('skip ending linebreak if "isLastMatch" argument is true', () => {
        const top3 = [['Santa Cruz Slugs', 10], ['Aptos FC', 9], ['San Jose Earthquakes', 6]]

        const expected = 'Matchday 3\nSanta Cruz Slugs, 10 pts\nAptos FC, 9 pts\nSan Jose Earthquakes, 6 pts\n'

        expect(getMatchDayResultsString(top3, 3, true)).toBe(expected)
    })
})
