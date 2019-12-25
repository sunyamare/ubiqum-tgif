/* already present in loadAtAGlance.js:
// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// actually accurate JS rounding function - credits: https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
*/

const atAGlance = {
    leastEngaged: [
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        }
    ],
    mostEngaged: [
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        },
        {
            name: "",
            url: "",
            numberOfMissedVotes: 0,
            percentMissedVotes: 0
        }
    ]
};
