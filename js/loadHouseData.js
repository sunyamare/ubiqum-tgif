/* document.getElementById("house-data").innerHTML = JSON.stringify(data, null, 2); */
/* data["results"][0]["members"][0]["first_name"]; // Alma
data.results[0].members[0].first_name; // Alma -> harder to work with in a loop with parameters
data.results[0].members["length"]; // 450 */

// the length of all ensuing arrays
const masterArrayLength = data.results[0].members["length"];

// the function that generates arrays for each properties of interest
const generateValueArray = (value, unitOfMeasure = "") => {
    let array = [];
    for (let n = 0; n < masterArrayLength; n++) {
        array.push(data["results"][0]["members"][n][value] + unitOfMeasure);
    }
    return array;
};

// full name
const firstNameArray = generateValueArray("first_name");
const middleNameArray = generateValueArray("middle_name");
const lastNameArray = generateValueArray("last_name");
const fullNameArray = [];
for (let n = 0; n < masterArrayLength; n++) {
    if (middleNameArray[n] === null) {
        fullNameArray.push(firstNameArray[n] + " " + lastNameArray[n]);
    } else {
        fullNameArray.push(
            firstNameArray[n] +
                " " +
                middleNameArray[n] +
                " " +
                lastNameArray[n]
        );
    }
}
console.log(fullNameArray);

// all other properties of interest
const partyArray = generateValueArray("party");
console.log(partyArray);

const stateArray = generateValueArray("state");
console.log(stateArray);

const seniorityArray = generateValueArray("seniority");
console.log(seniorityArray);

const votesWithPartyPercentageArray = generateValueArray(
    "votes_with_party_pct",
    "%"
);
console.log(votesWithPartyPercentageArray);

// building the table
