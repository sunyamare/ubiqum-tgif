// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// actually accurate JS rounding function - credits: https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// array per party
const demArray = dataToRetreive.filter(item => item.party === "D");
const repArray = dataToRetreive.filter(item => item.party === "R");
const indArray = dataToRetreive.filter(item => item.party === "I");

// function to get votes with party
const getVotesPerParty = array => {
    var resultArray = [];
    for (let id in array) {
        resultArray.push(array[id]["votes_with_party_pct"]);
    }
    return (
        round(resultArray.reduce((a, b) => a + b) / resultArray.length, 1) + "%"
    );
};

// senate attendance stats object
const atAGlance = [
    {
        party: "Democrats",
        noOfReps: demArray.length,
        percentVotedWithParty: getVotesPerParty(demArray)
    },
    {
        party: "Republicans",
        noOfReps: repArray.length,
        percentVotedWithParty: getVotesPerParty(repArray)
    },
    {
        party: "Independents",
        noOfReps: indArray.length,
        percentVotedWithParty: getVotesPerParty(indArray)
    },
    {
        party: "Total",
        noOfReps: dataToRetreive.length,
        percentVotedWithParty: getVotesPerParty(dataToRetreive)
    }
];
console.log(atAGlance);