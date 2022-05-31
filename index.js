const express = require("express");
const res = require("express/lib/response");
const { url } = require("inspector");
const { stringify } = require("querystring");
const app = express();
const { readFile } = require("fs").promises;
var deeplink = require("forward-deeplink");

app.get("/", async (request, response) => {
  // console.log(string.concat("solana:", request))
  response.send(await readFile("./index.html", "utf8"));
  // response.redirect("solana:" + request.query.url);
  //  console.log("solana:" + request.query.url);
  //  open("http://stackoverflow.com")
  //  res.redirect("solana:" + request.query);
});
// app.get(
//   "/",
//   deeplink({
//     fallback: "https://kitepay.org",
//   })
// );
app.listen(process.env.PORT || 3000, () =>
  console.log(
    "http://localhost:3000?url=solana:Do8tAJuXS4NBbfbWK8Z4uhEofJg7roDyQNzFnGRJX1gA%3Famount%3D1.0%26message%3DElectric20%25bill"
  )
);
