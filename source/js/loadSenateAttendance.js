// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// function to give me values and assign it to a variable
const generateValueArray = (value, unitOfMeasure = "") => {
    const array = [];
    for (let id in dataToRetreive) {
        array.push(dataToRetreive[id][value] + unitOfMeasure);
    }
    return array;
}; // use: generateValueArray("first_name");

// party array for number of party members
const partyArray = generateValueArray("party");
// function to get number of party members per party
const getMembersPerParty = whichParty => {
    return partyArray.filter(party => party === whichParty).length;
}; // use: getMembersPerParty("D")

// senate attendance stats object
const senateAttendanceStats = {
    atAGlance: [
        {
            party: "Democrats",
            noOfReps: getMembersPerParty("D"),
            percentVotedWithParty: 0
        },
        {
            party: "Republicans",
            noOfReps: getMembersPerParty("R"),
            percentVotedWithParty: 0
        },
        {
            party: "Independents",
            noOfReps: getMembersPerParty("I"),
            percentVotedWithParty: 0
        },
        {
            party: "Total",
            noOfReps: partyArray.length,
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
