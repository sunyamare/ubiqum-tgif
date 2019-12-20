/*for (let id in data["results"][0]["members"]) {
    let firstName = data["results"][0]["members"][id].first_name;
}*/
// data source to retrieve
const dataToRetreive = data["results"][0]["members"];

// function to give me values and assign it to a variable
/*const gimmeValues = () => {
    for (let id in data["results"][0]["members"]) {
        console.log(data["results"][0]["members"][id].first_name);
    }
};*/

const gimmeValues = value => {
    for (let id in dataToRetreive) {
        console.log(dataToRetreive[id].value);
    }
};

gimmeValues();
