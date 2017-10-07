// Define all the dependencies
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'testdb'
});




// Some routing
app.get('/', function (req, res, next) {
  res.send('This is Home Page')
})


app.get('/get-data', function (req, res, next) {
	connection.connect()

	connection.query('SELECT * FROM tutorials_tbl', function (err, rows, fields) {
		if (err) throw err
		console.log('The solution is: ', rows)
		res.json(rows)
	})

	connection.end()
})


app.post('/insert', function (req, res, next) {

})


app.post('/update', function (req, res, next) {

})


app.post('/delete', function (req, res, next) {
	
})


// Run the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


