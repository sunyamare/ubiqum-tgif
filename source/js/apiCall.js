async function apiCall(chamber) {
    console.log("fetching data ...");
    const url = `/.netlify/functions/apicall?c=${chamber}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}
let data = {};

const removeLoader = () => {
    const loaderElements = Array.from(document.querySelectorAll(".loader"));
    for (let element of loaderElements) {
        element.classList.remove("loader");
    }
};
