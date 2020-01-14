const loadAttendance = () => {
    console.log("attendance");
    // extracts only relevant info and if no parameter is sent, sort ascendingly
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

    // function to create engagement arrays
    const createEngagementArray = leastOrMost => {
        let missedVotesArray = [];
        if (leastOrMost === "most") {
            missedVotesArray = extractAndSortArray();
        } else {
            missedVotesArray = extractAndSortArray("desc");
        }

        // get 10% (round to 0 decimals)
        const tenPercentRounded = round(dataToRetreive.length * 0.1, 0);
        // create array with the amount of values calculated above
        const relevantEngagementArray = [];
        for (let i = 0; i < tenPercentRounded; i++) {
            relevantEngagementArray.push(missedVotesArray[i]);
        }
        // add additional elements to the array if next up values are the same as last position in array
        const maxNumberOfAdditionalRows = 20; // for security reasons (preventing an endless loop)
        for (
            let i = 0;
            i < maxNumberOfAdditionalRows &&
            relevantEngagementArray[relevantEngagementArray.length - 1][
                "missed_votes"
            ] ===
                missedVotesArray[relevantEngagementArray.length][
                    "missed_votes"
                ];
            i++
        ) {
            relevantEngagementArray.push(
                missedVotesArray[relevantEngagementArray.length]
            );
        }
        return relevantEngagementArray;
    };
    // most engaged array:
    const mostEngagedArray = createEngagementArray("most");
    // most engaged array:
    const leastEngagedArray = createEngagementArray("least");

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

    // create object for data
    const attendance = {
        leastEngaged: [],
        mostEngaged: []
    };

    // function to fill data object above
    const fillDataObject = (dataSource, dataDestination) => {
        for (let id in dataSource) {
            // object template
            const objectTemplate = {
                name: extractFullName(dataSource, id),
                url: dataSource[id].url,
                numberOfMissedVotes: dataSource[id]["missed_votes"],
                percentMissedVotes:
                    round(dataSource[id].missed_votes_pct, 1) + "%"
            };
            attendance[dataDestination].push(objectTemplate);
        }
    };
    // fill data object for least, and most engaged:
    fillDataObject(mostEngagedArray, "mostEngaged");
    fillDataObject(leastEngagedArray, "leastEngaged");

    // populate least engaged table
    pupulateTable(
        "leastEngaged-body",
        attendance.leastEngaged,
        "name",
        "numberOfMissedVotes",
        "percentMissedVotes",
        "url"
    );

    // populate least engaged table
    pupulateTable(
        "mostEngaged-body",
        attendance.mostEngaged,
        "name",
        "numberOfMissedVotes",
        "percentMissedVotes",
        "url"
    );
};
