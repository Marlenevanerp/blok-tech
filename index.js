const express = require('express')
const bodyParser =require('body-parser')
const {MongoClient} = require('mongodb');

const app = express()
const port = 3006;

const urlencodedParser = bodyParser.urlencoded({ extended: false})

// static files 
app.use(express.static('static')) //de static files worden opgevraagd 
app.use('style.css', express.static(__dirname + 'static/style.css'))

// set Templating Enginge
app.set('view engine', 'ejs')
let ejs = require('ejs');



// Set views
app.set('views','./views')

app.get('/',(req, res) => {
    res.render('home.ejs', {})
})

app.get('/about',(req, res) => {
  res.render('about.ejs', {})
})

app.post('/about', urlencodedParser, (req, res)=> {
  res.json(req.body)

})

// Error 404
app.use(function(req,res){
	res.status(404);
	res.render('404')
})

// liston on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})