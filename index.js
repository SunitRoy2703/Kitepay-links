const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/:url", (req, res) => {
  res.render("index", { url: "solana:" + req.params.url });
  console.log("solana:" + req.params.url);
});
app.listen(process.env.PORT || 3000, () =>
  console.log(
    "http://localhost:3000/Do8tAJuXS4NBbfbWK8Z4uhEofJg7roDyQNzFnGRJX1gA%3Famount%3D1.0%26message%3DElectric20%25bill"
  )
);
