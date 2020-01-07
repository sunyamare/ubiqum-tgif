// enter relevant data
const tableHeadingArray = [
    "Name",
    "Party",
    "State",
    "Years in Office",
    "% Votes w/ Party"
];
const dataToRetreive = data["results"][0]["members"];

// the length of all ensuing arrays
const masterArrayLength = dataToRetreive.length;

// the function that generates arrays for each properties of interest
const generateValueArray = (value, unitOfMeasure = "") => {
    const array = [];
    for (let n = 0; n < masterArrayLength; n++) {
        array.push(dataToRetreive[n][value] + unitOfMeasure);
    }
    return array;
};

// full name
const firstNameArray = generateValueArray("first_name");
const middleNameArray = generateValueArray("middle_name");
const lastNameArray = generateValueArray("last_name");
const fullNameArray = [];
for (let n = 0; n < masterArrayLength; n++) {
    if (middleNameArray[n] === "null") {
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

// all other properties of interest
const partyArray = generateValueArray("party");
const stateArray = generateValueArray("state");
const seniorityArray = generateValueArray("seniority");
const votesWithPartyPercentageArray = generateValueArray(
    "votes_with_party_pct",
    "%"
);

// existing table with IDs
let thead = document.getElementById("tableHead");
let tbody = document.getElementById("tableBody");

// generate table headings
let tableHead = document.createElement("tr");
for (let i = 0; i < tableHeadingArray.length; i++) {
    let newTh = document.createElement("th");
    newTh.appendChild(document.createTextNode(tableHeadingArray[i]));
    tableHead.appendChild(newTh);
}
thead.appendChild(tableHead);

// generate table contents
for (let i = 0; i < masterArrayLength; i++) {
    let tableContents = document.createElement("tr");
    const addContentFromArray = array => {
        let newTh = document.createElement("td");
        newTh.appendChild(document.createTextNode(array[i]));
        tableContents.appendChild(newTh);
    };
    addContentFromArray(fullNameArray);
    addContentFromArray(partyArray);
    addContentFromArray(stateArray);
    addContentFromArray(seniorityArray);
    addContentFromArray(votesWithPartyPercentageArray);
    tbody.appendChild(tableContents);
}

// add total rows info
let totalInfo = document.querySelector(".total-info");
let totalInfoText = document.createTextNode("Total rows: " + masterArrayLength);
totalInfo.appendChild(totalInfoText);

// checkboxes
// addEventListener: target.addEventListener(type, listener[, options]);
// event type for checkbox: CheckboxStateChange
// event type dropdown (<select>): change
// listener: object receiving a notification or function to be called
const buttonElement = document.getElementById("top");
buttonElement.addEventListener("click", function(event) {
    alert("Element clicked through function!");
});

const anotherElement = document.getElementById("top");
anotherElement.addEventListener("click", eventHandler);
function eventHandler(event) {
    if (event.type === "click") {
        /* handle a full screen toggle */
        alert("#2");
    } /* fullscreenerror */ else {
        /* handle a full screen toggle error */
    }
}

// Get party checkbox values
let checkboxValues = [];
const evaluateCheckbox = () => {
    checkboxValues = Array.from(
        document.querySelectorAll("input[name=filterByParty]:checked")
    ).map(item => item.value);
};
const checkboxSelection = document.getElementsByClassName("form-check-input");
Array.from(checkboxSelection).forEach(function(element) {
    element.addEventListener("click", () => {
        evaluateCheckbox();
    });
});
// Get state dropdown values (jQuery)
let dropdownValue = "All";
$(".dropdown-menu").on("click", "button", function() {
    $(".btn:first-child").text($(this).text());
    dropdownValue = $(this).val();
});
