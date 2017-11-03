//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//start server
var app = express();
var PORT = 3000;
//set up data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Data
const reservations = [];

function Reservation(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}
//landing page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//home
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//view tables
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
});
//enter reservation info
app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "makeReserv.html"));
});
//Add new reservation
app.post("/api/new", function (req, res) {
    let newReservation = new Reservation(req.body);
    reservations.push(newReservation);
});

//start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});