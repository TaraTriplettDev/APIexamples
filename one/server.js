const express = require("express"); // importing express to be used by the server.js file on node.js
const app = express(); // creating a shorthand to access the express function
const items = []; // Simple in-memory database

// Middleware
app.use(express.json()); // setting up middleware to parse json with express

// Create (POST)
app.post("/items", (req, res) => { // creating a post function with "/items" as its endpoint
  const item = req.body; // setting the value of the variable item to be the contents of req.body
  items.push(item); // pushing the contents of item into the items array
  res.status(201).send("Item created"); // returning the 201 status response "Item created" back once the task is finished running
});

// Read (GET)
app.get("/items", (req, res) => { // creating a get function with "/items" as its endpoint
  res.json(items); // accessing the contents of the items array 
});

// Update (PUT)
app.put("/items/:id", (req, res) => { // creating a put function with "/items/:id" as its endpoint, the value of id being 
                                      // dependent on the id of the item it is trying to reach
  const id = parseInt(req.params.id); // creating a variable "id" with the value of the parsed json interior of the request's params
  const updatedItem = req.body; // creating a variable that takes in the value of the req's body
  items[id] = updatedItem; // selecting the item from the items array under the index of the id
  res.send("Item updated"); // returning the message "Item updated" once the task is finished running
});

// Delete (DELETE)
app.delete('/items/:id', (req, res) => { // creating a delete function with "/items:id" as its endpoint
  const id = parseInt(req.params.id); // creating a variable "id" with the value of the parsed json interior of the request's params
  items.splice(id, 1); // using the splice method on the item in the items array indexed at the selected item's id* 
  res.send('Item deleted'); // returning the message "Item deleted" once the task is finished running
});

app.listen(3000, () => { // setting up express to listen at port 3000 
  console.log('Server is running on port 3000'); // returning the message "Server is running on port 3000" when the task is run
})
