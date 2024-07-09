import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  const streetName = req.body.street
  console.log(streetName)
  const petName = req.body.pet
  console.log(petName)
  const bandName = streetName + petName
  res.send(`<h1>Your band name is: </h1><h2>${bandName}😎</h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
