const partyLoyalty = () => {
  console.log("party loyalty");
  // extracts only relevant info and if no parameter is sent, sort ascendingly
  const extractAndSortArray = (asc = null) => {
    return dataToRetreive
      .map(
        ({
          first_name,
          middle_name,
          last_name,
          url,
          total_votes,
          votes_with_party_pct
        }) => ({
          first_name,
          middle_name,
          last_name,
          url,
          total_votes,
          votes_with_party_pct
        })
      )
      .sort((a, b) => {
        if (asc !== null) {
          return b.votes_with_party_pct - a.votes_with_party_pct;
        } else {
          return a.votes_with_party_pct - b.votes_with_party_pct;
        }
      });
  };

  // function to create loyalty arrays
  const createLoyaltyArray = leastOrMost => {
    let loyaltyArray = [];
    if (leastOrMost === "least") {
      loyaltyArray = extractAndSortArray();
    } else {
      loyaltyArray = extractAndSortArray("desc");
    }

    // get 10% (round to 0 decimals)
    const tenPercentRounded = round(dataToRetreive.length * 0.1, 0);
    // create array with the amount of values calculated above
    const relevantLoyaltyArray = [];
    for (let i = 0; i < tenPercentRounded; i++) {
      relevantLoyaltyArray.push(loyaltyArray[i]);
    }
    // add additional elements to the array if next up values are the same as last position in array
    const maxNumberOfAdditionalRows = 20; // for security reasons (preventing an endless loop)
    for (
      let i = 0;
      i < maxNumberOfAdditionalRows &&
      relevantLoyaltyArray[relevantLoyaltyArray.length - 1][
        "votes_with_party_pct"
      ] === loyaltyArray[relevantLoyaltyArray.length]["votes_with_party_pct"];
      i++
    ) {
      relevantLoyaltyArray.push(loyaltyArray[relevantLoyaltyArray.length]);
    }
    return relevantLoyaltyArray;
  };
  // most engaged array:
  const mostLoyalArray = createLoyaltyArray("most");
  // most engaged array:
  const leastLoyalArray = createLoyaltyArray("least");

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
  const loyalty = {
    leastLoyal: [],
    mostLoyal: []
  };

  // function to fill data object above
  const fillDataObject = (dataSource, dataDestination) => {
    for (let id in dataSource) {
      // object template
      const objectTemplate = {
        name: extractFullName(dataSource, id),
        url: dataSource[id].url,
        numberOfMissedVotes: round(
          (dataSource[id]["total_votes"] *
            dataSource[id].votes_with_party_pct) /
            100,
          0
        ),
        percentVotedWithParty:
          round(dataSource[id].votes_with_party_pct, 1) + "%"
      };
      loyalty[dataDestination].push(objectTemplate);
    }
  };
  // fill data object for least, and most engaged:
  fillDataObject(mostLoyalArray, "mostLoyal");
  fillDataObject(leastLoyalArray, "leastLoyal");

  // populate least engaged table
  pupulateTable(
    "leastLoyal-body",
    loyalty.leastLoyal,
    "name",
    "numberOfMissedVotes",
    "percentVotedWithParty",
    "url"
  );

  // populate least engaged table
  pupulateTable(
    "mostLoyal-body",
    loyalty.mostLoyal,
    "name",
    "numberOfMissedVotes",
    "percentVotedWithParty",
    "url"
  );
};
