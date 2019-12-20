// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// function to give me values and assign it to a variable
const generateValueArray = (value, unitOfMeasure = "") => {
    let array = [];
    for (let id in dataToRetreive) {
        array.push(dataToRetreive[id][value] + unitOfMeasure);
    }
    return array;
};

console.log(generateValueArray("first_name"));
