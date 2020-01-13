# ubiqum-tgif

Ubiqum MERN bootcamp 2nd project.

The task is to show API data from the ProPublica API on the US Congress.

The latest stable version is published here: https://peaceful-lichterman-430740.netlify.com/

## project setup

1. git clone this repository
2. navigate to the folder and run "npm install"
3. install netlify-cli if you don't have it already (brew or npm or whatever)
4. run "netlify link" and create a new site and link it to your local project
5. set up an environmental variable called "API_KEY" in your newly created netlify project online (netlify UI) and as value set your API key - you need to request a propublica API key (available on their website: https://projects.propublica.org/api-docs/congress-api/#get-an-api-key)
6. run "netlify dev" to test the site locally, this should start a dev server, it should also automatically include the environmental variable you created on Netlify, and it will build the lambda function that fetches api data
7. run "netlify deploy" to make a test deploy
8. if all looks well, run "netlify deploy -p" to make a production deploy
