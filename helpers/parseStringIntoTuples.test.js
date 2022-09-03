const parseStringIntoTuples = require('./parseStringIntoTuples')

describe('parseStringIntoTuples', () => {
    test('converts result string into array containing pair of tuples', () => {
        const resultString = 'San Jose Earthquakes 3, Santa Cruz Slugs 3'

        const result = parseStringIntoTuples(resultString)
        
        const expected = [['San Jose Earthquakes', 3], ['Santa Cruz Slugs', 3]]

        expect(result).toEqual(expected)
    })
})
