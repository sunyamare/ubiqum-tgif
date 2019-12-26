// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// actually accurate JS rounding function - credits: https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// array per party
const arrayPerParty = party => {
    return dataToRetreive.filter(item => item["party"] === party);
};
const demArray = arrayPerParty("D");
const repArray = arrayPerParty("R");
const indArray = arrayPerParty("I");

// function to get votes with party
const getVotesPerParty = array => {
    if (array.length === 0) {
        return "0%";
    }
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

// function to pupulate table
const pupulateTable = (
    tBodyName,
    objectArray,
    header1,
    header2,
    header3,
    url = ""
) => {
    // existing table with ID
    let tbody = document.getElementById(tBodyName);

    // generate table contents
    for (let id in objectArray) {
        let tableContents = document.createElement("tr");
        const tableRowContents = [url, header1, header2, header3];
        for (let i = 1; i < tableRowContents.length; i++) {
            const newRow = () => {
                let newTd = document.createElement("td");
                newTd.appendChild(
                    document.createTextNode(
                        objectArray[id][tableRowContents[i]]
                    )
                );
                return newTd;
            };
            if (i < 2 && url !== "") {
                let newTd = document.createElement("td");
                newTd.innerHTML = `<a href="${
                    objectArray[id][url]
                }" target="_blank" rel="noopener">${
                    objectArray[id][tableRowContents[i]]
                }</a>`;
                tableContents.appendChild(newTd);
            } else {
                const newTd = newRow();
                tableContents.appendChild(newTd);
            }
        }
        tbody.appendChild(tableContents);
    }
};
pupulateTable(
    "atAGlance-body",
    atAGlance,
    "party",
    "noOfReps",
    "percentVotedWithParty"
);
