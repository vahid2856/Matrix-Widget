//import sdk from "./node_modules/matrix-js-sdk";
var sdk = require("matrix-js-sdk");
console.log(sdk)
console.log("--------------------------");


const client = sdk.createClient("https://quranic.network");

console.log(client)
console.log("--------------------------");

client.login("m.login.password", {"user": "@vahid_nadarkhani:quranic.network", "password": "invalidP1988"}).then((response) => {
    
    const accessToken = response.access_token;
});

console.log(accessToken);
console.log("--------------------------");

// const accessToken = "MDAxZGxvY2F0aW9uIHF1cmFuaWMubmV0d29yawowMDEzaWRlbnRpZmllciBrZXkKMDAxMGNpZCBnZW4gPSAxCjAwMzRjaWQgdXNlcl9pZCA9IEB2YWhpZF9uYWRhcmtoYW5pOnF1cmFuaWMubmV0d29yawowMDE2Y2lkIHR5cGUgPSBhY2Nlc3MKMDAyMWNpZCBub25jZSA9IGppUjI9Jk1UQTg3N1RuR3IKMDAyZnNpZ25hdHVyZSDcGkvyhbQ3NPmM1bTQGg4qw4QNIavaj7Di-sUOq54pawo"

// const client = sdk.createClient({
//     baseUrl: "https://quranic.network",
//     accessToken: accessToken,
//     userId: "@vahid_nadarkhani:quranic.network"
// });
