//import sdk from "./node_modules/matrix-js-sdk";

// const client = sdk.createClient("https://matrix.org");

var sdk = require("matrix-js-sdk");
// client.login("m.login.password", {"user": "user", "password": "password"}).then((response) => {
    
//     const accessToken = response.access_token;
// });
// console.log(accessToken);

const accessToken = "MDAxZGxvY2F0aW9uIHF1cmFuaWMubmV0d29yawowMDEzaWRlbnRpZmllciBrZXkKMDAxMGNpZCBnZW4gPSAxCjAwMzRjaWQgdXNlcl9pZCA9IEB2YWhpZF9uYWRhcmtoYW5pOnF1cmFuaWMubmV0d29yawowMDE2Y2lkIHR5cGUgPSBhY2Nlc3MKMDAyMWNpZCBub25jZSA9IGppUjI9Jk1UQTg3N1RuR3IKMDAyZnNpZ25hdHVyZSDcGkvyhbQ3NPmM1bTQGg4qw4QNIavaj7Di-sUOq54pawo"

const client = sdk.createClient({
    baseUrl: "https://quranic.network",
    accessToken: accessToken,
    userId: "@vahid_nadarkhani:quranic.network"
});
