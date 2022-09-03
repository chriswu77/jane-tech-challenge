const convertResultsToPoints = require('./convertResultsToPoints')

describe('convertResultsToPoints', () => {
    test('higher scoring team gets 3 points and lower scoring team gets 0 points', () => {
        const tuples = [['San Jose Earthquakes', 4], ['Santa Cruz Slugs', 2]]

        const expected = {
            'San Jose Earthquakes': 3,
            'Santa Cruz Slugs': 0
        }

        expect(convertResultsToPoints(tuples)).toEqual(expected)
    })

    test('both teams get 1 point when there is a tie', () => {
        const tuples = [['San Jose Earthquakes', 2], ['Santa Cruz Slugs', 2]]

        const expected = {
            'San Jose Earthquakes': 1,
            'Santa Cruz Slugs': 1
        }

        expect(convertResultsToPoints(tuples)).toEqual(expected)
    })
})
