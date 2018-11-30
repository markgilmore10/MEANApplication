var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin1:admin1@ds155823.mlab.com:55823/meanapp';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var playerSchema = new Schema({
    name: String,
    phone: Number,
    dob: Date,
    position: String,
    email: String,
    wage: Number,
    contract: Date
})
var PostModel = mongoose.model('player', playerSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/players', function(req, res){
    console.log("post successful");
    console.log(req.body.name);
    console.log(req.body.phone);
    console.log(req.body.dob);
    console.log(req.body.position);
    console.log(req.body.email);
    console.log(req.body.wage);
    console.log(req.body.contract);

    PostModel.create({
        name: req.body.name,
        phone: req.body.phone,
        dob: req.body.dob,
        position: req.body.position,
        email: req.body.email,
        wage: req.body.wage,
        contract: req.body.contract
    });
    res.send('Item added');


})

app.get('/api/players', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
})

app.get('/api/players/:id', function(req, res){
    console.log("Read post " +req.params.id);

    PostModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})

app.put('/api/players/:id', function(req, res){
    console.log("Update Post" +req.params.id);
    console.log(req.body.name);
    console.log(req.body.phone);
    console.log(req.body.dob);
    console.log(req.body.position);
    console.log(req.body.email);
    console.log(req.body.wage);
    console.log(req.body.contract);
    
    PostModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})

app.delete('/api/players/:id', function(req, res){
    console.log(req.params.id);

    PostModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})