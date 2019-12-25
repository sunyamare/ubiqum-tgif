/*
// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// actually accurate JS rounding function - credits: https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
*/

// extracts only voting info and if no parameter is sent, will sort ascendingly
const extractAndSortArray = (asc = null) => {
    return dataToRetreive
        .map(
            ({
                first_name,
                middle_name,
                last_name,
                url,
                missed_votes,
                missed_votes_pct
            }) => ({
                first_name,
                middle_name,
                last_name,
                url,
                missed_votes,
                missed_votes_pct
            })
        )
        .sort((a, b) => {
            if (asc !== null) {
                return b.missed_votes - a.missed_votes;
            } else {
                return a.missed_votes - b.missed_votes;
            }
        });
};

// create ascending missed votes array
const ascendingMissedVotesArray = extractAndSortArray();
// get 10% (rounded up to 0 decimals)
const tenPercentRounded = round(dataToRetreive.length * 0.1, 0);
// create array with bottom 10% (or rounded-up %)
const missedvotesTableArray = [];
for (let i = 0; i < tenPercentRounded; i++) {
    missedvotesTableArray.push(ascendingMissedVotesArray[i]);
}

// add additional elements to the array if next up values are the same as last position in array
const maxNumberOfAdditionalRows = 20; // for security reasons (preventing an endless loop)
for (
    let i = 0;
    i < maxNumberOfAdditionalRows &&
    missedvotesTableArray[missedvotesTableArray.length - 1]["missed_votes"] ===
        ascendingMissedVotesArray[missedvotesTableArray.length]["missed_votes"];
    i++
) {
    missedvotesTableArray.push(
        ascendingMissedVotesArray[missedvotesTableArray.length]
    );
}

// function to extract full_name from array
const extractFullName = (object, id) => {
    if (object[id].middle_name === null) {
        return object[id].first_name + " " + object[id].last_name;
    } else {
        return (
            object[id].first_name +
            " " +
            object[id].middle_name +
            " " +
            object[id].last_name
        );
    }
};
console.log(extractFullName(ascendingMissedVotesArray, 0));

const attendance = {
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
