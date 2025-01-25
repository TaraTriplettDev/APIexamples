const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", (req, res) => res.render("index"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})

app.get("/items", (req, res) => res.send("Get items"));
app.post("/items", (req, res) => res.send("Create item"));
app.put("/items/:id", (req, res) => res.send(`Update item ${req.params.id}`));
app.delete("/items/:id", (req, res) => res.send(`Delete item ${req.params.id}`));

app.get("/user/:id", (req, res) => res.send(`Get User ${req.params.id}`));

app.get("/data", (req, res) => {
  res.json({ message: [ "apple", "banana", "cherry" ] });
});

app.get("/search/:term", (req, res) => {
  const searchTerm = req.params.term;
  res.send(`Search results for: ${searchTerm}`)
});

