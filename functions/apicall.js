// .netlify/functions/apitest
const axios = require("axios");

exports.handler = async event => {
    const chamber = event.queryStringParameters.c;
    const url = `https://api.propublica.org/congress/v1/113/${chamber}/members.json`;
    try {
        const response = await axios.get(url, {
            headers: { "X-API-Key": process.env.API_KEY }
        });
        const data = response.data;
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.log(error);
    }
};

/*const fetch = require("node-fetch").default;

exports.handler = async event => {
    const chamber = event.queryStringParameters.c;
    const url = `https://api.propublica.org/congress/v1/113/${chamber}/members.json`;

    const response = await fetch(url, {
        headers: {
            "X-API-Key": process.env.API_KEY
        }
    })
        .then(response => response.json())
        .then(response => JSON.stringify(response));
    return {
        statusCode: 200,
        body: response
    };
};*/
