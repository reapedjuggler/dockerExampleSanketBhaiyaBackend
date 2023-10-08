const express = require('express')
const bodyParser = require('body-parser');

const app = express(); 

// To parse form data into JSON and url-encoded form data;
bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())

// PORT on host machine
const port = 5001;

app.get("/", (req, res) => {
    console.log("hello in the get route at \"/");
    res.send("Hello from the other side!!!!!!");
})

app.get("/custom", (req, res) => {
    console.log("Inside the /custom route");
    res.json({"route": "custom"});
})

app.post("/senddata", (req, res) => {
    console.log("logging the request body\n", req.body);
    res.send("Post request has been successfully sent");
})

app.listen(port, () => {
    console.log(`Onwards and upwards from ${port}`);
})
