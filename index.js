const express = require('express')
const app = express()
const port = 3000

let ejs = require('ejs');


// static files 
app.use(express.static('static')) //de static files worden opgevraagd 
app.use('style.css', express.static(__dirname + 'static/style.css'))

// set Views
app.set('views','./views')
app.set('view engine', 'ejs')

app.get('views',(req, res) => {
    res.render('profiel.ejs', {})
})

// liston on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Error 404
app.use(function(req,res){
	res.status(404);
	res.render('404')
})
