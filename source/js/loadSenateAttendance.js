// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// function to give me values and assign it to a variable
const generateValueArray = (value, unitOfMeasure = "") => {
    const array = [];
    for (let id in dataToRetreive) {
        array.push(dataToRetreive[id][value] + unitOfMeasure);
    }
    return array;
};
// console.log(generateValueArray("first_name"));

// get numbers per party
const partyArray = generateValueArray("party");
const numberOfReps = partyArray.filter(party => party === "R").length;
const numberOfDems = partyArray.filter(party => party === "D").length;
const numberOfInds = partyArray.filter(party => party === "I").length;
console.log(numberOfDems + ", " + numberOfReps + ", " + numberOfInds);

// senate attendance stats object
const senateAttendanceStats = {
    atAGlance: [
        {
            party: "Democrats",
            noOfReps: 0,
            percentVotedWithParty: 0
        },
        {
            party: "Republicans",
            noOfReps: 0,
            percentVotedWithParty: 0
        },
        {
            party: "Independents",
            noOfReps: 0,
            percentVotedWithParty: 0
        },
        {
            party: "Total",
            noOfReps: 0,
            percentVotedWithParty: 0
        }
    ],
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
console.log(senateAttendanceStats);
