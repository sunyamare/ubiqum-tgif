// .netlify/functions/apitest
import fetch from "node-fetch";

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
};
