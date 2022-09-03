## How to run application

- Run `npm install` to install dependencies
- To use your own input file (defaults to sample input data)
  1. Copy your input file into the `input` folder
  2. Go to `filePaths.js` in the root directory
  3. Change `INPUT_FILENAME` to the name of your input file
- Run `node index.js`
- Refer to `output/output.txt` for results (also logged to the console)
- Run `npm test` to run tests

## My approach

- My first thought was to find the total number of teams in the league given the input data
- With that, each matchday consists of (n / 2) games
- Given that all the results in the input are grouped by matchday, I iterated over the results in (n / 2) intervals to target games by matchday
- I kept a running sum of every team's total points in a hash map and re-sorted that data on each iteration from highest to lowest and alphabetically in case of ties
- I also maintained an output string that I built up by appending the matchday results after every iteration
- Finally, after iterating through all the results, I printed my output string to the console and an output file
