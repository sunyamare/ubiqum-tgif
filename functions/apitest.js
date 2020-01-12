// .netlify/functions/apitest.js
exports.handler = async () => {
    const envvar = process.env.API_KEY;
    return {
        statusCode: 200,
        body: `API Key: ${envvar}!`
    };
};
