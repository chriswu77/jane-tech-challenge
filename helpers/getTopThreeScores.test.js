const getTopThreeScores = require('./getTopThreeScores')

describe('getTopThreeScores', () => {
    test('given no ties, return array containing top 3 highest scoring teams', () => {
        const scores = {
            'San Jose Earthquakes': 6,
            'Santa Cruz Slugs': 10,
            'Capitola Seahorses': 0,
            'Aptos FC': 9,
            'Felton Lumberjacks': 3,
            'Monterey United': 4
        }

        const expected = [['Santa Cruz Slugs', 10], ['Aptos FC', 9], ['San Jose Earthquakes', 6]]

        expect(getTopThreeScores(scores)).toEqual(expected)
    })

    test('given ties, return array containing top 3 highest scoring teams with tied teams sorted alphabetically', () => {
        const scores = {
            'San Jose Earthquakes': 10,
            'Santa Cruz Slugs': 10,
            'Capitola Seahorses': 0,
            'Aptos FC': 11,
            'Felton Lumberjacks': 3,
            'Monterey United': 5
        }

        const expected = [['Aptos FC', 11], ['San Jose Earthquakes', 10], ['Santa Cruz Slugs', 10]]

        expect(getTopThreeScores(scores)).toEqual(expected)
    })
})
